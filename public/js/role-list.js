$(function () {

    initRoles();

    $('#sym-btn-add-role')
        .on('click', addRoleDetails);

    $('#sym-table-roles')
        .on('click', '.sym-table-item-selectable:not(.sym-table-item-fake)', editRoleDetails)
        .on('click', '.sym-form-group[data-form="role-buttons"] .sym-btn-cancel[data-action="role-cancel"]', cancelRoleForm)
        .on('click', '.sym-table-item.sym-table-item-selected .sym-table-column-actions .sym-table-column-action[data-action="delete-role"]', deleteRole)
        .on('click', '.sym-table-item-details.sym-table-item-details-roles .sym-form-group-buttons .sym-btn.sym-btn-create:not(.sym-btn-disabled-grey)[data-action="role-create"]', saveNewRole)
        .on('click', '.sym-table-item-details.sym-table-item-details-roles .sym-form-group-buttons .sym-btn.sym-btn-create:not(.sym-btn-disabled-grey)[data-action="role-update"]', updateRole);
});

function saveNewRole(e) {

    e.preventDefault();

    var baseSelector = $('#sym-table-roles .sym-table-item-details.sym-table-item-details-roles');
    var roleIsTimeBoxed = baseSelector.find('.sym-input[data-input="role_timeboxed"]').prop('checked');
    var permissions = buildPermissions();

    var data = {
        role_name: baseSelector.find('.sym-input[data-input="role_name"]').val(),
        time_boxed: roleIsTimeBoxed ? 1 : 0,
        start_date: roleIsTimeBoxed ? baseSelector.find('.sym-input[data-input="role_start_at"]').val() : '',
        end_date: roleIsTimeBoxed ? baseSelector.find('.sym-input[data-input="role_end_at"]').val() : '',
        _token: csrfToken
    };

    if (permissions.some(function (module) {
        return module.permissions.length > 0
    })) {
        data['permissions'] = JSON.stringify(permissions)
    }

    $.ajax({
        type: 'POST',
        url: '/administration/role',
        data: data
    }).done(function (response) {

        if (response.success) {

            admin_globals.roles.push(response.role);

            var selectedItem = $('.sym-table[data-content="roles"] .sym-table-item.sym-table-item-selected');
            var template = $('#sym-template-role').html();

            var addedRole = drawRole(response.role, template);

            closeRoleDetails(selectedItem);

            $('#sym-table-roles .sym-table-items').append(addedRole);

        }
    }).always(function (response) {
        symNotification(response)
    });
}

function updateRole(e) {

    e.preventDefault();

    var baseSelector = $('#sym-table-roles .sym-table-item-details.sym-table-item-details-roles');
    var roleIsTimeBoxed = baseSelector.find('.sym-input[data-input="role_timeboxed"]').prop('checked');
    var permissions = buildPermissions();
    var roleElement = $('#sym-table-roles .sym-table-item.sym-table-item-selectable.sym-table-item-selected');
    var roleId = roleElement.data('role-id');

    var data = {
        role_name: baseSelector.find('.sym-input[data-input="role_name"]').val(),
        time_boxed: roleIsTimeBoxed ? 1 : 0,
        start_date: roleIsTimeBoxed ? baseSelector.find('.sym-input[data-input="role_start_at"]').val() : '',
        end_date: roleIsTimeBoxed ? baseSelector.find('.sym-input[data-input="role_end_at"]').val() : '',
        _token: csrfToken
    };

    if (permissions.some(function (module) {
        return module.permissions.length > 0
    })) {
        data['permissions'] = JSON.stringify(permissions)
    }

    $.ajax({
        type: 'PUT',
        url: '/administration/role/' + roleId,
        data: data
    }).done(function (response) {

        if (response.success) {

            // update the role in the roles global object
            var roleToUpdate = admin_globals.roles.find(function (role) {
                return role.id === response.role.id
            }) || null;

            if (roleToUpdate != null) {
                Object.assign(roleToUpdate, response.role);
            }

            // change name
            roleElement.find('.sym-table-column[data-column="name"] p').text(response.role.name);
            // change timebox
            roleElement.find('.sym-table-column[data-column="timeboxed"] p').html(displayRoleTimeBoxed(response.role.time_boxed));
            // change permissions
            roleElement.find('.sym-table-column[data-column="permissions"] p').html(displayRolePermissions(response.role.permissions));

            closeRoleDetails(roleElement);
        }
    }).always(function (response) {
        symNotification(response)
    });

}

/* init data */
function initRoles() {

    symTableManageSortIndicators('sym-table-roles');

    placeHolderRoles(4);
}

/* empty data */
function placeHolderRoles(nbrRows) {

    var template = $('#sym-template-role').html();

    var item = drawRole(null, template);

    var content = item.repeat(nbrRows);

    $('#sym-table-roles')
        .addClass('sym-table-empty')
        .find('.sym-table-items').html(content);
}

/* get data */
function getRoles() {

    $.ajax({
        type: 'GET',
        url: '/administration/role'
    }).done(function (response) {

        if (response.success) {

            drawRoles(response.roles);
            admin_globals.loaded_roles = true;
            admin_globals.roles = response.roles;
        }
    }).always(function (response) {

        symNotification(response);
    });
}

/**
 * Delete role
 * @param role
 */
function deleteRole(e) {

    e.preventDefault();

    var self = $(this);
    var item = self.parent().parent();
    var roleTable = $('#sym-table-roles');

    var role = self.parent().parent().attr('data-role-id');
    var roleName = self.parent().parent().find('.sym-table-column[data-column="name"] p').text();

    var confirmModal = $('#sym-role-delete-confirm');
    confirmModal.find('.sym-modal-placeholder-role-name').html(roleName);
    confirmModal.modal('show');

    $('#sym-role-delete-confirm-yes').off('click').on('click', function () {
        $.ajax({
            'type': 'DELETE',
            'url': '/administration/role/' + role,
            data: {
                _token: csrfToken
            }
        }).done(function (response) {

            if (response.success) {

                closeRoleDetails(item);

                setTimeout(function () {
                    roleTable.find('.sym-table-item[data-role-id=' + role + ']').removeClass('sym-table-item-selected').fadeOut('fast').remove();
                }, 500);

                if (roleTable.find('.sym-table-item:not(.sym-table-item-fake)').length < 0) {
                    roleTable.find('.sym-table-items').toggleClass('sym-table-empty');
                }

            }

        }).always(function (res) {
            symNotification(res)
        })
    });
}

/* draw */
function drawRoles(roles) {

    var template = $('#sym-template-role').html();
    var content = '';

    if (roles.length > 0) {

        roles.forEach(function (role) {
            var tmp = drawRole(role, template);
            content += tmp;
        });

        $('#sym-table-roles')
            .removeClass('sym-table-empty')
            .find('.sym-table-items').append(content);

        refreshTooltip();
    }
}

function drawRole(role, template) {

    var tmp = template;
    var fake = isNull(role);

    var mapping = {
        '__item-fake__': fake ? 'sym-table-item-fake' : '',
        '__role-id__': fake ? '' : role.id,
        '__role-name__': fake ? '' : role.name,
        '__role-time-boxed__': fake ? '' : displayRoleTimeBoxed(role.time_boxed),
        '__role-permissions__': fake ? '' : displayRolePermissions(role.permissions)
    }

    return replaceAll(tmp, mapping);
}

function displayRoleTimeBoxed(timeBox) {

    if (isNull(timeBox)) {

        return '-';
    }

    var startDate = formatDateAt(timeBox.start_at);
    var endDate = formatDateAt(timeBox.end_at);

    return '<span class="icon-time" data-html="true" data-toggle="tooltip" data-placement="right" data-original-title="Start date : ' + startDate + '</br>End date &nbsp: ' + endDate + '"></span>';
}

function displayRolePermissions(permissions) {

    var list = '';

    if (permissions.length > 0) {

        permissions.forEach(function (permission) {

            var permissionClass = permission.full ? 'full' : 'partial';
            list += ' <span class="sym-role-permission-' + permissionClass + '">' + permission.module + '</span> /';
        });

        list = list.slice(0, -1);

        return list;
    }

    return '-';
}

/* tab callback */
function symTabCallbackRoles() {

    console.log('Open tab : Roles');

    if (!admin_globals.loaded_roles) {

        getRoles();
    }
}

/* sort */
function symTableSortRoles(column, order) {

    admin_globals.roles = _.orderBy(admin_globals.roles, [column], [order]);
    $('#sym-table-roles .sym-table-item:not(.sym-table-item-fake)').remove();
    drawRoles(admin_globals.roles);
}

/**
 *
 * @param searchableColumns
 * @param query
 */
function symTableSearchRoles(searchableColumns, query) {

    var wrapper = $(".sym-table[data-content='roles']");
    var items = wrapper.find('.sym-table-item');
    var matchCount = 0;
    query = query.toLowerCase();

    items.each(function () {

        var item = $(this);
        var userName = item.find('div[data-column="name"] > p').html().toLowerCase();
        var match = userName.includes(query);
        matchCount += match ? 1 : 0;
        item.toggleClass('sym-table-item-no-match', !match);
    });

    wrapper.toggleClass('sym-table-empty', matchCount == 0);
}

/* open details */
function addRoleDetails() {

    var self = $(this);

    admin_globals.selected_role_id = 0;
    admin_globals.selected_role = null;

    var fakeItem = self.closest('.sym-tab-body-block').find('.sym-table-item-fake').first();

    openRoleDetails(fakeItem);
}

function editRoleDetails() {

    var self = $(this);
    var dataId = parseInt(self.attr('data-id'));
    var itemSelected = self.hasClass('sym-table-item-selected');

    admin_globals.selected_role_id = itemSelected ? -1 : dataId;
    admin_globals.selected_role = null;
    clearTimeout(admin_globals.details_timeout);

    if (!itemSelected) {

        openRoleDetails(self);
    } else {

        closeRoleDetails(self);
    }
}

function openRoleDetails(item) {

    var template = $('#sym-template-role-details').html();

    item.closest('.sym-table').find('.sym-table-item-details').remove();
    item.after(template);
    
    initTimeBoxedDateBLock(item);

    $('html').scrollTop(0);

    setTimeout(function () {
        symTableDetailsModeCssClass(item, 'addClass');

        admin_globals.details_timeout = setTimeout(function () {
            item.closest('.sym-table').find('.sym-table-item-details').css('height', 'auto').css('overflow', 'visible');
        }, 500);
    }, 10);

    buildFakeModulesPermissions(4);
    symInputCheckEmpty();

    getRoleData();
}

function getRoleData() {

    var id = admin_globals.selected_role_id;
    var url = id == 0 ? 'create' : id + '/edit';

    admin_globals.role_details_request = $.ajax({
        type: 'GET',
        url: '/administration/role/' + url
    }).done(function (response) {

        if (response.success) {

            admin_globals.selected_role = response.role;
            drawRoleData(response.role, response.modules);

            $('#sym-admin-wrapper').find('.sym-table-item-details-roles').removeClass('sym-table-item-details-loading');
        }

    }).always(function (response) {

        symNotification(response);
    });

}

function closeRoleDetails(item) {

    var detailsBlock = item.closest('.sym-table').find('.sym-table-item-details');
    var detailsHeight = detailsBlock.height();
    detailsBlock.css('height', detailsHeight);

    setTimeout(function () {
        detailsBlock.css('height', '0px').css('overflow', 'hidden');
        symTableDetailsModeCssClass(item, 'removeClass');
    }, 10);

    admin_globals.details_timeout = setTimeout(function () {
        item.closest('.sym-table').find('.sym-table-item-details').remove();
    }, 1000);
}

function cancelRoleForm(e) {
    e.preventDefault();

    var selectedItem = $('.sym-table[data-content="roles"] .sym-table-item.sym-table-item-selected');

    closeRoleDetails(selectedItem);
}

function buildPermissions() {

    var selectedModules = [];
    var modules = $('.sym-table[data-content="roles"] .sym-table[data-content="basic"] .sym-table-item, .sym-table[data-content="roles"] .sym-table[data-content="optional"] .sym-table-item');

    modules.each(function (i, el) {
        var selectedPermissions = [];

        var $module = $(el).find('.sym-table-column[data-column="module_name"] .sym-permissions-wrapper .sym-check-container-principle .sym-input-permissions').data('permission-key');

        $(el).find('.sym-table-column[data-column="module_permissions"] .sym-permissions-wrapper .sym-check-container:not(.sym-check-container-principle) .sym-input-permissions:checked').each(function (index, element) {

            var $element = $(element);
            var permissionKey = $element.data('permission-key');
            var permissionId = $element.data('permission-id');
            selectedPermissions.push({id: permissionId, name: permissionKey});
        });

        selectedModules.push({name: $module, permissions: selectedPermissions})
    });

    return selectedModules;

}
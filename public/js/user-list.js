$(function () {

    initUsers();

    //init user filter selectpicker
    $('#user-selector-filter').selectpicker();

    $('#sym-btn-add-user')
        .on('click', addUserDetails);

    $('#sym-table-users')
        .on('click', '.sym-table-item-selectable:not(.sym-table-item-fake)', editUserDetails)
        .on('click', '.sym-table-item.sym-table-item-selected .sym-table-column-actions .sym-table-column-action[data-action="delete-user"]', deleteUser)
        .on('click', '.sym-form-group[data-form="user-buttons"] .sym-btn-cancel[data-action="user-cancel"]', cancelUserForm)
        .on('mouseup', '.sym-table-item.sym-table-item-selected .sym-table-column-actions .sym-table-column-action[data-action="authorize-user"] .switchery', toggleUserState)
        .on('click', '.sym-table-item-details.sym-table-item-details-users .sym-form-group-buttons .sym-btn.sym-btn-create:not(.sym-btn-disabled-grey)[data-action="user-create"]', saveNewUser)
        .on('click', '.sym-table-item-details.sym-table-item-details-users .sym-form-group-buttons .sym-btn.sym-btn-create:not(.sym-btn-disabled-grey)[data-action="user-update"]', updateExistingUser);

    $('.user-selector-filter').on('change', handleFilterUsers);

});

function saveNewUser(e) {

    e.preventDefault();

    var baseSelector = $('#sym-table-users .sym-table-item-details.sym-table-item-details-users');

    var rolesIds = baseSelector.find('select[name="sym-select-user-roles"]').val() || [];
    var permissions =  buildUserPermissions();

    var data = {
        first_name: baseSelector.find('.sym-input[data-input="first_name"]').val(),
        last_name: baseSelector.find('.sym-input[data-input="last_name"]').val(),
        email: baseSelector.find('.sym-input[data-input="email"]').val(),
        password: baseSelector.find('.sym-input[data-input="password"]').val(),
        type: baseSelector.find('.sym-input[name="sym-user-type"]:checked').attr('data-user-type'),
        notified_on_creation: baseSelector.find('.sym-input[name="sym-user-create-notify"]').prop('checked') ? 1 : 0,
        _token: csrfToken
    };

    if (data['type'] != '0') {
        if (rolesIds.length > 0) {
            data['rolesIds'] = rolesIds
        } else {
            if (permissions.some(function (module) {
                return module.permissions.length > 0
            })) {
                data['permissions'] = JSON.stringify(permissions)
            }
        }
    }

    $.ajax({
        type: 'POST',
        url: '/administration/user',
        data: data
    }).done(function (response) {

        if (response.success) {

            drawNewUser(response.user)
        }

    }).always(function (response) {
        symNotification(response);
    });

}

function updateExistingUser(e) {

    e.preventDefault();

    var baseSelector = $('#sym-table-users .sym-table-item-details.sym-table-item-details-users');

    var rolesIds = baseSelector.find('select[name="sym-select-user-roles"]').val() || [];
    var permissions =  buildUserPermissions();
    var userElement = $('#sym-table-users .sym-table-item.sym-table-item-selectable.sym-table-item-selected');
    var userId = userElement.data('user-id');

    var data = {
        first_name: baseSelector.find('.sym-input[data-input="first_name"]').val(),
        last_name: baseSelector.find('.sym-input[data-input="last_name"]').val(),
        email: baseSelector.find('.sym-input[data-input="email"]').val(),
        password: baseSelector.find('.sym-input[data-input="password"]').val(),
        type: baseSelector.find('.sym-input[name="sym-user-type"]:checked').attr('data-user-type'),
        notified_on_creation: baseSelector.find('.sym-input[name="sym-user-update-notify"]').prop('checked') ? 1 : 0,
        _token: csrfToken
    };

    if (data['type'] != '0') {
        if (rolesIds.length > 0) {
            data['rolesIds'] = rolesIds
        } else {
            if (permissions.some(function (module) {
                return module.permissions.length > 0
            })) {
                data['permissions'] = JSON.stringify(permissions)
            }
        }
    }

    $.ajax({
        type: 'PUT',
        url: '/administration/user/' + userId,
        data: data
    }).done(function (response) {

        if (response.success) {

           drawUpdateUser(response.user);

           // draw user devices if he has any
            if (response.user.devices.length > 0) {
                drawUserDevices(response.user.devices)
            }

            buildSelectUserLevelNsm(response.user.company.id, 'xxxx');
            $('select.user-selector').selectpicker('val', selectedUserId);
        }
    }).always(function (response) {
        symNotification(response)
    });

}

function handleFilterUsers() {

    var selectedFilter = $(this).selectpicker('val');

    var wrapper = $(".sym-table[data-content='users']");

    var users = admin_globals.users;

    var filtredUsers = [];

    if (selectedFilter != null) {

        selectedFilter.forEach(function (f) {

            var filters = users.filter(function (user) {

                if (f >= 0 && f <= 2) {
                    return user.type == f;
                } else {
                    if (f == 3) {
                        return user.state == 1;
                    } else if (f == 4) {
                        return user.state == 0;
                    }
                }

            });

            filtredUsers.push(filters);

        });

        var flattenedUsers = [].concat.apply([], filtredUsers);

        $('#sym-table-users').find('.sym-table-item:not(.sym-table-item-fake)').remove();

        drawUsers((selectedFilter.length == 1) ? _.uniq(flattenedUsers) : getDuplicates(flattenedUsers));
    } else {
        $('#sym-table-users').find('.sym-table-item:not(.sym-table-item-fake)').remove();

        drawUsers(users);
    }

}

/* init data */
function initUsers() {

    symTableManageSortIndicators('sym-table-users');

    placeHolderUsers(4);

    getUsers();
}

/* empty data */
function placeHolderUsers(nbrRows) {

    var template = $('#sym-template-user').html();

    var item = drawUser(null, template);

    var content = item.repeat(nbrRows);

    $('#sym-table-users')
        .addClass('sym-table-empty')
        .find('.sym-table-items').html(content);
}

/* get data */
function getUsers() {

    $.ajax({
        type: 'GET',
        url: '/administration/user'
    }).done(function (response) {

        if (response.success) {

            drawUsers(response.users);
            admin_globals.users = response.users;
        }
    }).always(function (response) {

        symNotification(response);
    });
}

/* Delete user */
function deleteUser(e) {

    e.preventDefault();

    var self = $(this);
    var item = self.parent().parent();
    var user = self.parent().parent().attr('data-user-id');
    var userName = self.parent().parent().find('.sym-table-column[data-column="name"] .sym-user-name').text();
    var userTable = $('#sym-table-users');

    var confirmModal = $('#sym-user-delete-confirm');
    confirmModal.find('.sym-modal-placeholder-user-name').html(userName);
    confirmModal.modal('show');

    $('#sym-user-delete-confirm-yes').off('click').on('click', function () {
        $.ajax({
            'type': 'DELETE',
            'url': '/administration/user/' + user,
            data: {
                _token: csrfToken
            }
        }).done(function (response) {

            if (response.success) {

                closeUserDetails(item);

                setTimeout(function () {
                    userTable.find('.sym-table-item[data-user-id=' + user + ']').removeClass('sym-table-item-selected').fadeOut('fast', function () {
                        userTable.find('.sym-table-item[data-user-id=' + user + ']').remove();
                    });
                }, 1000);

                if (userTable.find('.sym-table-item:not(.sym-table-item-fake)').length < 0) {
                    userTable.find('.sym-table-items').toggleClass('sym-table-empty');
                }

                // remove user from filter
                $('.user-selector ul.dropdown-menu li').each(function (i, item) {

                    if ($(item).find('a .text').text().replace(/  +/g, ' ').includes(userName)) {
                        var index = $(item).attr('data-original-index');
                        var selector = $('.user-selector ul.dropdown-menu li[data-original-index="' + index + '"]');
                        selector.fadeOut('fast', function () {
                            selector.remove();
                        })
                    }

                });
            }

        }).always(function (res) {
            symNotification(res)
        })
    });
}

/* Toggle user state (enabled/disabled) */
function toggleUserState(e) {

    var self = $(this);
    var userSelector = self.closest('.sym-table-item-selected');
    var userId = userSelector.attr('data-user-id');
    var userName = userSelector.find('.sym-table-column[data-column="name"] .sym-user-name').text();
    var initialUserState = userSelector.attr('data-user-state');

    var userTable = $('#sym-table-users');
    var confirmModal = $('#sym-user-activate-confirm');
    var activateUserBlock = confirmModal.find('.sym-activate-user');
    var deactivateUserBlock = confirmModal.find('.sym-deactivate-user');
    confirmModal.find('.sym-modal-placeholder-user-name').html(userName);

    self.trigger('click');
    
    if (initialUserState == 1) {
        deactivateUserBlock.css('display', 'block');
        activateUserBlock.css('display', 'none');
    } else if (initialUserState == 0) {
        deactivateUserBlock.css('display', 'none');
        activateUserBlock.css('display', 'block');
    }

    confirmModal.modal('show');

    $('#sym-user-activate-confirm-yes').off('click').on('click', function () {
        $.ajax({
            'type': 'POST',
            'url': '/administration/user/' + userId + '/authorize',
            data: {
                _token: csrfToken
            }
        }).done(function (response) {

            if (response.success) {

                self.trigger('click');

                userSelector.attr('data-user-state', initialUserState == 1 ? 0 : 1);

                closeUserDetails(userSelector);

                getUserById(response.user.id).state = response.user.state;

                buildSelectUserLevelNsm(response.user.company.id, 'xxxx')
                $('select.user-selector').selectpicker('val', selectedUserId);
            }

        }).always(function (res) {
            symNotification(res)
        })
    });

}

/* draw */
function drawUsers(users) {

    var template = $('#sym-template-user').html();
    var content = '';

    if (users.length > 0) {

        users.forEach(function (user) {
            var tmp = drawUser(user, template);
            content += tmp;
        });

        $('#sym-table-users')
            .removeClass('sym-table-empty')
            .find('.sym-table-items').append(content);

        refreshTooltip();

        switcheryCall();
    }
}

function drawUser(user, template) {

    var tmp = template;
    var fake = isNull(user);

    var mapping = {
        '__item-fake__': fake ? 'sym-table-item-fake' : '',
        '__user-id__': fake ? '' : user.id,
        '__user-state__': fake ? '' : user.state,
        '__user-notified__': fake ? '' : user.notified,
        '__user-avatar__': fake ? '' : (user.avatar == '' ? '<span>' + user.initials + '</span>' : '<img src="' + user.avatar + '" />'),
        '__user-name__': fake ? '' : user.name,
        '__user-email__': fake ? '' : user.email,
        '__user-type__': fake ? '' : user.type,
        '__user-type-label__': fake ? '' : displayUserType(user.type),
        '__user-active__': fake ? '' : (user.state == 0 ? '' : 'checked'),
        '__user-notified-text__': fake ? '' : (user.notified == 1 ? 'Yes' : 'No'),
        '__user-roles__': fake ? '' : displayUserRoles(user.roles)
    }

    return replaceAll(tmp, mapping);
}

function displayUserType(type) {

    switch (type) {
        case 0:
            return 'Recipient';
        case 1:
            return 'BO User';
        case 2:
            return 'BO user / Recipient';
    }
}

function displayUserRoles(roles) {

    var list = '';

    if (roles.length > 0) {

        roles.forEach(function (role) {


            var startDate = isNull(role.time_boxed) ? '' : formatDateAt(role.time_boxed.start_at);
            var endDate = isNull(role.time_boxed) ? '' : formatDateAt(role.time_boxed.end_at);
            var iconTime = isNull(role.time_boxed) ? '<i></i>' : '<i class="icon-time"  data-html="true" data-toggle="tooltip" data-placement="left" data-original-title="Start date : ' + startDate + '</br>End date &nbsp: ' + endDate + '"></i>';

            list += '<span>' + role.name + iconTime + '</span>';
        });

        list += '';

        return list;
    }

    return '-';
}

/* tab callback */
function symTabCallbackUsers() {

    console.log('Open tab : Users');
}

/* sort */
function symTableSortUsers(column, order) {

    admin_globals.users = _.orderBy(admin_globals.users, [column], [order]);
    console.log(admin_globals.users);
    $('#sym-table-users .sym-table-item:not(.sym-table-item-fake)').remove(),
    drawUsers(admin_globals.users);
}

function symTableSearchUsers(searchableColumns, query) {

    var wrapper = $(".sym-table[data-content='users']");
    var items = wrapper.find('.sym-table-item');
    var matchCount = 0;
    query = query.toLowerCase();

    items.each(function () {

        var item = $(this);
        var userName = item.find('.sym-user-name').html().toLowerCase();
        var userEmail = item.find('.sym-user-email').html().toLowerCase();
        var match = userName.includes(query) || userEmail.includes(query);
        matchCount += match ? 1 : 0;
        item.toggleClass('sym-table-item-no-match', !match);
    });

    wrapper.toggleClass('sym-table-empty', matchCount == 0);
}

/* open details */
function addUserDetails() {

    var self = $(this);

    admin_globals.selected_user_id = 0;
    admin_globals.selected_user = null;

    var fakeItem = self.closest('.sym-tab-body-block').find('.sym-table-item-fake').first();

    openUserDetails(fakeItem);
}

function editUserDetails() {

    var self = $(this);
    var dataId = parseInt(self.attr('data-id'));
    var itemSelected = self.hasClass('sym-table-item-selected');

    admin_globals.selected_user_id = itemSelected ? -1 : dataId;
    admin_globals.selected_user = null;
    clearTimeout(admin_globals.details_timeout);

    if (!itemSelected) {

        openUserDetails(self);
    } else {

        closeUserDetails(self);
    }
}

function openUserDetails(item) {

    var template = $('#sym-template-user-details').html();

    item.closest('.sym-table').find('.sym-table-item-details').remove();
    item.after(template);

    $('html').scrollTop(0);

    setTimeout(function () {
        symTableDetailsModeCssClass(item, 'addClass');

        admin_globals.details_timeout = setTimeout(function () {
            item.closest('.sym-table').find('.sym-table-item-details').css('height', 'auto').css('overflow', 'visible');
        }, 500);
    }, 10);

    toggleUserFilter(true);

    buildFakeModulesPermissions(4);
    symInputCheckEmpty();
    initUserDevices();

    getUserData();
}

function closeUserDetails(item) {

    var detailsBlock = item.closest('.sym-table').find('.sym-table-item-details');
    var detailsHeight = detailsBlock.height();
    detailsBlock.css('height', detailsHeight);

    if (!isNull(admin_globals.user_details_request)) {
        admin_globals.user_details_request.abort();
    }

    setTimeout(function () {
        detailsBlock.css('height', '0px').css('overflow', 'hidden');
        symTableDetailsModeCssClass(item, 'removeClass');
    }, 10);

    admin_globals.details_timeout = setTimeout(function () {
        item.closest('.sym-table').find('.sym-table-item-details').remove();
    }, 1000);

    toggleUserFilter(false);
}

/* get user data */
function getUserData() {

    var id = admin_globals.selected_user_id;
    var url = id == 0 ? 'create' : id + '/edit';

    admin_globals.user_details_request = $.ajax({
        type: 'GET',
        url: '/administration/user/' + url
    }).done(function (response) {

        if (response.success) {

            admin_globals.selected_user = response.user;
            drawUserData(response.user, response.roles, response.modules);

            $('#sym-admin-wrapper').find('.sym-table-item-details-users').removeClass('sym-table-item-details-loading');
        }

    }).always(function (response) {

        symNotification(response);
    });
}

/* remove user from user filter */
function removeUserFromUserFilter(user) {
    // remove user from filter
    $('.user-selector ul.dropdown-menu li').each(function (i, item) {

        if ($(item).find('a .text').text().replace(/  +/g, ' ').includes(user)) {
            var index = $(item).attr('data-original-index');
            var selector = $('.user-selector ul.dropdown-menu li[data-original-index="' + index + '"]');
            selector.fadeOut('fast', function () {
                selector.remove();
            })
        }
    });
}

/* add user to user filter */
function addUserToUserFilter(user) {
    var affiliateId = user.root_group_id;
    var affiliateGroup = $('#optgroup-affiliate' + affiliateId).length;
    var optionParent = affiliateGroup == 0 ? $('select.user-selector') : $('#optgroup-affiliate' + affiliateId);

    optionParent.append('<option value="' + user.id + '">' + htmlEntities(user.first_name + ' ' + user.last_name) + '</option>');
    $('select.user-selector').selectpicker('refresh');
}

/* close add user form */
function cancelUserForm(e) {

    e.preventDefault();

    var selectedItem = $('.sym-table[data-content="users"] .sym-table-item.sym-table-item-selected');

    closeUserDetails(selectedItem);
}

function toggleUserFilter(condition) {
    $('.bootstrap-select.user-selector-filter').css('display', condition ? 'none' : 'block');
}

function buildUserPermissions() {
    var selectedModules = [];
    var modules = $('.sym-table[data-content="users"] .sym-table[data-content="basic"] .sym-table-item, .sym-table[data-content="users"] .sym-table[data-content="optional"] .sym-table-item');

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
$(function () {

    initAdministration();

    $('#sym-admin-wrapper')
            .on('click', '.sym-btn-user-permission', collapsePermissions)
            .on('click', '.sym-input-permissions', manageModulePermissions)
            .on('click', '.sym-input[name="sym-user-type"]', displayHideBlocksByUserType);
});

/* init administration */
function initAdministration() {

}

/* callapse module permissions */
function collapsePermissions() {

    var self = $(this);
    var state = self.attr('data-state');
    var detailsWrapper = self.closest('.sym-table-item-details');
    var groupPermissions = detailsWrapper.find('.sym-form-group[data-form="user-permissions"]');
    var open = state == 'close';

    if (open) {

        setTimeout(function () {
            groupPermissions.css('height', 'auto');
        }, 300);
    } else {

        groupPermissions.css('height', groupPermissions.height());
        setTimeout(function () {
            groupPermissions.css('height', '');
        });
    }

    groupPermissions.toggleClass('sym-form-group-permissions-open', open);
    self.attr('data-state', (open ? 'open' : 'close'));
}

/* manage permissions check */
function manageModulePermissions() {

    var self = $(this);
    var items = $('#sym-admin-wrapper').find('.sym-input-permissions');

    manageRecursiveModulePermissions(self, items, true, true);

    if ($('#sym-admin-wrapper').find('.sym-tab-header-tab[data-tab-target="users"]').hasClass('sym-tab-header-tab-active')) {

        validateUser();
    } else {

        validateRole();
    }
}

function manageRecursiveModulePermissions(item, items, up, down) {

    var checked = item.is(':checked');
    var permission = item.attr('data-permission-key');
    var parentPermission = item.attr('data-permission-parent');
    var checkedSelector = checked ? 'not(":checked")' : 'checked';

    if (down) {

        items.filter('[data-permission-parent="' + permission + '"]:' + checkedSelector).each(function () {

            var _self = $(this);
            _self.prop('checked', checked);
            manageRecursiveModulePermissions(_self, items, false, true);
        });
    }

    if (up && parentPermission != undefined) {

        if (checked || !checked && $('.sym-input-permissions[data-permission-parent="' + parentPermission + '"]:checked').length == 0) {

            var parent = items.filter('[data-permission-key="' + parentPermission + '"]:' + checkedSelector).first();
            if (parent.length > 0) {
                parent.prop('checked', checked);
                manageRecursiveModulePermissions(parent, items, true, false);
            }
        }
    }
}

function checkPermissions(permissions) { // add parent selector

    $('#sym-admin-wrapper').find('.sym-input-permissions').prop('checked', false);

    permissions.forEach(function (item) {

        if (item.indexOf('full') > -1) {

            item = item.split('.')[0];
        }

        $('#sym-admin-wrapper').find('.sym-input-permissions[data-permission-key="' + item + '"]').trigger('click');
    });
}

/* manage user type */
function displayHideBlocksByUserType(e) {

    var self = $(this);
    var userType = self.attr('data-user-type');

    $('#sym-admin-wrapper').find('.sym-table-item-details').attr('data-user-type', userType);

    if (e.isTrigger == undefined) {

        if (admin_globals.selected_affiliate_id != -1) {

            validateAffiliate();
        } else {

            validateUser();
        }
    }
}

/* draw user data */
function drawUserData(user, roles, modules) {

    var userRolesIds = [];

    if (user != undefined) {

        var adminWrapper = $('#sym-admin-wrapper');
        var formWrapper = adminWrapper.find('.sym-form-group[data-form="user-basic"]');
        formWrapper.find('.sym-input[data-input="first_name"]').val(htmlEntities(user.first_name));
        formWrapper.find('.sym-input[data-input="last_name"]').val(htmlEntities(user.last_name));
        formWrapper.find('.sym-input[data-input="email"]').val(htmlEntities(user.email));
        formWrapper.find('.sym-input[data-input="email_confirm"]').val(htmlEntities(user.email));

        var typeWrapper = adminWrapper.find('.sym-form-group[data-form="user-type"]');
        typeWrapper.find('.sym-input[data-user-type="' + user.type + '"]').trigger('click');
        adminWrapper.find('.sym-input[name="sym-user-update-notify"]').prop('checked', user.notified == 1);

        adminWrapper.find('.sym-table-item-selected')
                .attr('data-user-type', user.type)
                .attr('data-user-notified', user.notified);

        userRolesIds = user.roles_ids;

        drawUserDevices(user.devices);

        updateRemainingDeviceReset(user.remaining_device_reset);
    }

    symInputCheckEmpty();

    drawModulesData(modules);

    manageRolesSelection(roles, userRolesIds);

    if (user != undefined && userRolesIds.length == 0) {

        checkPermissions(user.custom_permissions.split(','));
    }
}

function updateRemainingDeviceReset(remainingDeviceReset) {

    var inputWrapper = $('#sym-table-users').find('.sym-reset-rep-data-options .sym-check-container:nth-child(1)');

    inputWrapper.children('input').prop('disabled', remainingDeviceReset == 0);

    inputWrapper.find('label i').attr('data-remaining-reset', remainingDeviceReset).html(' (' + remainingDeviceReset + ' reset left)');
}

function drawRoleData(role, modules) {

    drawModulesData(modules);

    if (role != undefined) {

        var adminWrapper = $('#sym-admin-wrapper');
        var formWrapper = adminWrapper.find('.sym-form-group[data-form="role-basic"]');
        var roleTimebox = role.time_boxed != null;

        formWrapper.find('.sym-input[data-input="role_name"]').val(htmlEntities(role.name));
        formWrapper.find('.sym-input[data-input="role_timeboxed"]').prop('checked', roleTimebox);

        if (roleTimebox) {
            adminWrapper.find('.sym-role-time-boxed-dates').css('display', 'flex');

            formWrapper.find('.sym-input[data-input="role_start_at"]').val(htmlEntities(formatDateDay(role.time_boxed.start_at)));
            formWrapper.find('.sym-input[data-input="role_end_at"]').val(htmlEntities(formatDateDay(role.time_boxed.end_at)));
        }

        var rolePermissions = role.customPermissions.split(',');

        checkPermissions(rolePermissions);
    }

    symInputCheckEmpty();
}

/* build fake permissions */
function buildFakeModulesPermissions(nbrRows, blockType) {

    var template = $('#sym-template-modules-permissions-fake').html();
    var basicPermissionsBlock = $('#sym-admin-wrapper').find('.sym-table-module-permission[data-content="basic"]');
    var optionalPermissionsBlock = $('#sym-admin-wrapper').find('.sym-table-module-permission[data-content="optional"]');

    var templateRows = template.repeat(nbrRows);

    if (blockType == undefined || blockType == 'basic') {
        basicPermissionsBlock.find('.sym-table-items').html(templateRows);
    }

    if (blockType == undefined || blockType == 'optional') {
        optionalPermissionsBlock.find('.sym-table-items').html(templateRows);
    }
}

/* draw modules and permissions */
function drawModulesData(modules) {

    var basicPermissionsBlock = $('#sym-admin-wrapper').find('.sym-table-module-permission[data-content="basic"]');
    var optionalPermissionsBlock = $('#sym-admin-wrapper').find('.sym-table-module-permission[data-content="optional"]');
    var permissionTemplate = $('#sym-template-module-permissions').html();
    var moduleNameTemplate = $('#sym-template-module-name').html();
    var contentBasic = '';
    var contentOptional = '';

    modules.forEach(function (module) {

        var tmp = drawModuleData(module, moduleNameTemplate, permissionTemplate);
        if (module.type == 1) {
            contentBasic += tmp;
        } else {
            contentOptional += tmp;
        }
    });

    basicPermissionsBlock.find('.sym-table-items').html(contentBasic);
    optionalPermissionsBlock.find('.sym-table-items').html(contentOptional);

    if (contentBasic == '') {
        buildFakeModulesPermissions(4, 'basic');
    }
    if (contentOptional == '') {
        buildFakeModulesPermissions(4, 'optional');
    }
}

function drawModuleData(module, template, permissionTemplate) {

    var tmp = template;
    var permissionsContent = '<div class="sym-permissions-wrapper"><p>-</p></div>';
    var split = {};

    if (module.permissions.length > 1) {
        $('#sym-template-module-permissions').find('p').css('display', 'none');
        $('#sym-template-module-permissions').find('.sym-check-container').css('display', 'inline-block');
    } else {
        $('#sym-template-module-permissions').find('p').css('display', 'block');
        $('#sym-template-module-permissions').find('.sym-check-container').css('display', 'none');
    }

    permissionTemplate = $('#sym-template-module-permissions').html();

    if (module.permissions) {

        permissionsContent = '';

        module.permissions.forEach(function (permission) {

            if (permission.key.indexOf('_') > -1) {

                var x = permission.key.split('_');

                if (x[0] in split) {

                    split[x[0]].push(permission);
                } else {
                    split[x[0]] = [permission];
                }
            } else {

                permission.key = module.key + '.' + permission.key;
                permissionsContent += drawModulePermissionData(module.key, permission, permissionTemplate);
            }

        });

        if (JSON.stringify(split) === JSON.stringify({})) {

            permissionsContent = '<div class="sym-permissions-wrapper">' + permissionsContent + '</div>';
        } else {

            Object.keys(split).forEach(function (key) {

                var object = split[key];
                permissionsContent += '<div class="sym-permissions-wrapper">';

                permissionsContent += drawModulePermissionData(module.key, {
                    key: module.key + '.' + key,
                    pretty_name: capitalize(key)
                }, permissionTemplate, true);

                object.forEach(function (permission) {
                    permission.key = module.key + '.' + permission.key;
                    permissionsContent += drawModulePermissionData(module.key + '.' + key, permission, permissionTemplate);

                });

                permissionsContent += '</div>';
            });
        }
    }

    var mapping = {
        '__module-key__': module.key,
        '__module-name__': capitalize(module.name),
        '__module-permissions__': permissionsContent
    }

    return replaceAll(tmp, mapping);
}

function drawModulePermissionData(parentKey, permission, template, special) {

    var tmp = template;

    var mapping = {
        '__permission-id__': permission.id,
        '__permission-key__': permission.key,
        '__permission-name__': specialModuleNameTransformation(permission.pretty_name),
        '__permission-parent__': parentKey,
        '__permission-special__': special != undefined && special == true ? 'sym-check-container-principle' : ''
    }

    return replaceAll(tmp, mapping);
}

function specialModuleNameTransformation(permissionName) {

    switch (permissionName) {

        case 'Bouser' :
            return 'BO user';
        default:
            return permissionName;
    }
}

function getDuplicates(array) {
    return _.filter(
            _.uniq(
                    _.map(array, function (item) {
                        if (_.filter(array, {id: item.id}).length > 1) {
                            return item;
                        }

                        return false;
                    })),
            function (value) {
                return value;
            });
}

function getUserById(userId) {

    return admin_globals.users.find(function (user) {

        return user.id == userId;
    });
}

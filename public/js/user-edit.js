/* manage role selection */
function manageRolesSelection(roles, roles_ids) {

    var permissionsBlock = $('#sym-admin-wrapper').find('.sym-form-group[data-form="user-permissions"]');
    var rolesBlock = $('#sym-admin-wrapper').find('.sym-form-group[data-form="user-roles"] .form-group');
    var userRoleSelector = $('#sym-admin-wrapper').find('.sym-table-item-details .sym-select-user-roles');

    buildRoles(userRoleSelector, roles, roles_ids);

    userRoleSelector.multiselect({
        enableFiltering: true,
        onChange: function (option, checked, select) {

            permissionsBlock.removeClass('sym-form-group-permissions-disabled');

            if ($(option).val() == 'other') {
                userRoleSelector.multiselect('select', ['other']);
                $('.multiselect-native-select .btn-group').removeClass('open');
                deselectAllRoles();
            } else {

                if (userRoleSelector.val() != null) {
                    permissionsBlock.addClass('sym-form-group-permissions-disabled');
                }
                userRoleSelector.multiselect('deselect', ['other']);
                collectRolePermissions();
                userRoleSelector.trigger('click').next('div').find('button.multiselect').trigger('click');
            }

            validateUser();
        }
    });

    displayTimeBoxedRoleIcon();

    if (roles_ids.length > 0) {

        permissionsBlock.addClass('sym-form-group-permissions-disabled');
        userRoleSelector.multiselect('select', roles_ids);
        collectRolePermissions();
    }

    rolesBlock.removeClass('symmetrk-loading-block');
}

function buildRoles(userRoleSelector, roles) {

    var content = '';

    roles.forEach(function (role) {

        content += '<option ' +
                'data-permissions="' + role.permissions + '"' +
                'value="' + role.id + '"' +
                'data-time-boxed="' + (isNull(role.time_boxed) ? 0 : 1) + '"' +
                (isNull(role.time_boxed) ? '' : 'data-dates="Start date : ' + formatDateDay(role.time_boxed.start_at) + '</br>End date : ' + formatDateDay(role.time_boxed.end_at) + '"') +
                '>' + role.name +
                '</option>';
    });

    userRoleSelector.append(content);
}

function displayTimeBoxedRoleIcon() {

    var userRoleSelector = $('#sym-admin-wrapper').find('.sym-table-item-details .sym-select-user-roles');

    userRoleSelector.find('option').each(function () {

        var self = $(this);
        var parent = self.parent();
        var multi = parent.next();
        var isTimeBoexed = self.attr('data-time-boxed') == '1';
        if (isTimeBoexed) {
            var item = multi.find('input[value="' + self.attr('value') + '"]');
            var label = item.parent();
            label.attr({
                'aria-hidden': true,
                'data-html': true,
                'data-toggle': "tooltip",
                'data-placement': "left",
                'data-original-title': self.attr('data-dates')
            }).prepend('<i class="fa fa-clock-o role-icon-time-boxed"></i>');
        }
    });

    refreshTooltip();
}

function collectRolePermissions() {

    var userRoleSelector = $('#sym-admin-wrapper').find('.sym-table-item-details .sym-select-user-roles');
    var rolePermissions = [];

    userRoleSelector.find('option:selected').each(function () {

        rolePermissions = rolePermissions.concat($(this).attr('data-permissions').split(','));
    });

    rolePermissions = _.uniqBy(rolePermissions);

    checkPermissions(rolePermissions);
}

function deselectAllRoles() {

    var userRoleSelector = $('#sym-admin-wrapper').find('.sym-table-item-details .sym-select-user-roles');
    var selectedElements = [];

    userRoleSelector.find('option:selected').each(function () {
        selectedElements.push($(this).val());
    });

    userRoleSelector.multiselect('deselect', selectedElements);
}

/* draw new user */
function drawNewUser(user) {

    admin_globals.users.push(user);

    var selectedItem = $('.sym-table[data-content="users"] .sym-table-item.sym-table-item-selected');

    closeUserDetails(selectedItem);

    setTimeout(function () {

        symRefreshSortTable('#sym-table-users');

        var newItem = $('.sym-table-item[data-user-id="' + user.id + '"]');

        newItem.addClass('sym-table-item-highlight');
        setTimeout(function () {
            newItem.removeClass('sym-table-item-highlight');
        }, 3000);

        $('html, body').animate({
            scrollTop: newItem.offset().top
        }, 100);

    }, 1000);
}

/* draw new user */
function drawUpdateUser(user) {

    var template = $('#sym-template-user').html();

    var updatedUser = drawUser(user, template);

    $('#sym-table-users .sym-table-item[data-user-id="'+user.id+'"]')
            .replaceWith(updatedUser)
    
    $('#sym-table-users .sym-table-item[data-user-id="'+user.id+'"]').addClass('sym-table-item-selected');
    
    Object.assign(getUserById(user.id), user);
    
    switcheryCall();
    
    // sort after update
}

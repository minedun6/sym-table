var _isDirty = false;

$(function () {

    $('#sym-table-users').on('keyup', '.sym-form-group[data-form="user-basic"] .sym-input', validateUser);

    $('#sym-table-roles').on('keyup', '.sym-form-group[data-form="role-basic"] .sym-input', validateRole);
    
    $('#sym-table-affiliates').on('keyup', '.sym-form-group[data-form*="-basic"] .sym-input', validateAffiliate);
});

var admin_validation = {
    user_create: {
        form_wrapper: '#sym-table-users .sym-form-group[data-form="user-basic"]',
        first_name: ['required'],
        last_name: ['required'],
        email: ['required', 'email'],
        email_confirm: ['email', 'equal:email'],
        password: ['required', 'min_length:8_'],
        password_confirm: ['required', 'equal:password'],
        btn: '#sym-table-users .sym-btn[data-action="user-create"]',
        btn_disable_class: 'sym-btn-disabled-grey'
    },
    user_update: {
        form_wrapper: '#sym-table-users .sym-form-group[data-form="user-basic"]',
        first_name: ['required'],
        last_name: ['required'],
        email: ['required', 'email'],
        email_confirm: ['email', 'equal:email'],
        password: ['min_length:8_'],
        password_confirm: ['equal:password'],
        btn: '#sym-table-users .sym-btn[data-action="user-update"]',
        btn_disable_class: 'sym-btn-disabled-grey'
    },
    affiliate_create: {
        form_wrapper: '#sym-table-affiliates',
        affiliate_name: ['required'],
        first_name: ['required'],
        last_name: ['required'],
        email: ['required', 'email'],
        email_confirm: ['email', 'equal:email'],
        password: ['required', 'min_length:8_'],
        password_confirm: ['required', 'equal:password'],
        btn: '#sym-table-affiliates .sym-btn[data-action="affiliate-create"]',
        btn_disable_class: 'sym-btn-disabled-grey'
    },
    affiliate_update: {
        form_wrapper: '#sym-table-affiliates',
        affiliate_name: ['required'],
        first_name: ['required'],
        last_name: ['required'],
        email: ['required', 'email'],
        email_confirm: ['email', 'equal:email'],
        password: ['min_length:8_'],
        password_confirm: ['equal:password'],
        btn: '#sym-table-affiliates .sym-btn[data-action="affiliate-update"]',
        btn_disable_class: 'sym-btn-disabled-grey'
    },
    role_create: {
        form_wrapper: '#sym-table-roles .sym-form-group[data-form="role-basic"]',
        role_name: ['required'],
        btn: '#sym-table-roles .sym-btn[data-action="role-create"]',
        btn_disable_class: 'sym-btn-disabled-grey'
    },
    role_update: {
        form_wrapper: '#sym-table-roles .sym-form-group[data-form="role-basic"]',
        role_name: ['required'],
        btn: '#sym-table-roles .sym-btn[data-action="role-update"]',
        btn_disable_class: 'sym-btn-disabled-grey'
    },
}

var admin_validation_rules = {
    
    permissions: function (wrapper) {

        wrapper = $(wrapper);
        var valid = wrapper.find('.sym-input-permissions:checked').length > 0 ||
                wrapper.find('[data-form="user-type"] [data-user-type="0"]').prop('checked');

        wrapper.find('[data-form="user-permissions"] .sym-form-group-title').toggleClass('sym-form-group-title-error', !valid);
        wrapper.find('[data-form="role-permissions"] .sym-form-group-title').toggleClass('sym-form-group-title-error', !valid);

        if (valid) {

            return {success: true};
        }

        return {success: false, errors: ['at least on permission should be checked']};
    },
    
    modules: function () {

        var wrapper = $('#sym-admin-wrapper');
        var valid = wrapper.find('.sym-input-permissions:checked').length > 0;
        var rule = admin_globals.selected_affiliate_id == 0 ? admin_validation.affiliate_create : admin_validation.affiliate_update;

        wrapper.find('#affiliate_modules .sym-form-group-title').toggleClass('sym-form-group-title-error', !valid);

        if (valid) {

            return {success: true};
        }

        return {success: false, errors: ['at least on permission should be checked']};
    },
    
    timeBoxedRole: function() {
        
        var roleTable = $('#sym-table-roles');
        var isTimeBoxed = roleTable.find('.sym-input[data-input="role_timeboxed"]').prop('checked');
        var startDate = roleTable.find('.sym-input[data-input="role_start_at"]');
        var endDate = roleTable.find('.sym-input[data-input="role_end_at"]');
        var startDateEmpty = startDate.val() == '';
        var endDateEmpty = endDate.val() == '';
        
        startDate.toggleClass('sym-input-error', startDateEmpty);
        endDate.toggleClass('sym-input-error', endDateEmpty);

        if (!isTimeBoxed || isTimeBoxed && !startDateEmpty && !endDateEmpty) {

            return {success: true};
        }

        return {success: false, errors: ['Start and End date are required']};
    }
}

function validateUser() {
    
    console.log('validate user');

    var rules = admin_globals.selected_user_id == 0 ? admin_validation.user_create : admin_validation.user_update;

    var formValidation = validateForm(rules);

    var permissionValidation = admin_validation_rules.permissions('#sym-table-users');
    
    var valid = formValidation.success && permissionValidation.success;
    
    $(rules.btn).toggleClass(rules.btn_disable_class, !valid);
}

function validateRole() {
    
    console.log('validate role');

    var rules = admin_globals.selected_role_id == 0 ? admin_validation.role_create : admin_validation.role_update;

    var formValidation = validateForm(rules);

    var permissionValidation = admin_validation_rules.permissions('#sym-table-roles');

    var timeBoxedValidation = admin_validation_rules.timeBoxedRole();
    
    var valid = formValidation.success && permissionValidation.success && timeBoxedValidation.success;
    
    $(rules.btn).toggleClass(rules.btn_disable_class, !valid);
}

function validateAffiliate() {
    
    console.log('validate affiliate');

    var rules = admin_globals.selected_affiliate_id == 0 ? admin_validation.affiliate_create : admin_validation.affiliate_update;

    var formValidation = validateForm(rules);

    var moduleValidation = admin_validation_rules.modules();
    
    var valid = formValidation.success && moduleValidation.success;
    
    $(rules.btn).toggleClass(rules.btn_disable_class, !valid);
}
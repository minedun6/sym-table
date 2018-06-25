$(function () {

    $('#sym-admin-wrapper')
            .on('click', '.sym-input-rep-data', manageResetDataCheck)
            .on('click', '.sym-table-user-devices .sym-table-item:not(.sym-table-item-fake) .sym-btn[data-action="device-delete"]', deleteRepDevice)
            .on('click', '.sym-form-group[data-form="user-data"] .sym-btn[data-action="user-data-delete"]:not(.sym-btn-disabled)', resetRepData)
            .on('mouseup', '.sym-table-user-devices .switchery', authorizeRepDevice);
});

/* init devices */
function initUserDevices() {

    symTableManageSortIndicators('sym-table-devices');

    placeHolderUserDevices(2);
}

/* empty data */
function placeHolderUserDevices(nbrRows) {

    var template = $('#sym-template-rep-devices').html();

    var item = drawUserDevice(null, template);

    var content = item.repeat(nbrRows);

    $('#sym-table-devices')
            .addClass('sym-table-empty')
            .find('.sym-table-items').html(content);
}

/* draw user devices */
function drawUserDevices(devices) {

    var template = $('#sym-template-rep-devices').html();
    var content = '';

    if (devices.length > 0) {

        devices.forEach(function (device) {
            var tmp = drawUserDevice(device, template);
            content += tmp;
        });

        $('#sym-table-devices')
                .removeClass('sym-table-empty')
                .find('.sym-table-items').append(content);

        refreshTooltip();

        switcheryCall();
    }
}

function drawUserDevice(device, template) {

    var tmp = template;
    var fake = isNull(device);

    var mapping = {
        '__item-fake__': fake ? 'sym-table-item-fake' : '',
        '__device-id__': fake ? '' : device.id,
        '__device-name__': fake ? '' : device.device_name,
        '__device-ios-version__': fake ? '' : device.ios_version,
        '__device-sym-version__': fake ? '' : device.sym_version,
        '__device-last-login__': fake ? '' : formatDateAt(device.last_login),
        '__device-connected__': fake ? '' : device.connected,
        '__device-connected-msg__': fake ? '' : (device.connected == 0 ? 'Device not connected' : 'Device connected'),
        '__device-authorized__': fake ? '' : (device.authorized == 0 ? '' : 'checked')
    }

    return replaceAll(tmp, mapping);
}

/* manage reset data check */
function manageResetDataCheck() {

    var wrapper = $(this).closest('.sym-form-group');
    var noCheck = wrapper.find('.sym-input-rep-data:checked').length == 0;

    wrapper.find('.sym-btn-delete[data-action="user-data-delete"]').toggleClass('sym-btn-disabled', noCheck);
}

/* sort */
function symTableSortDevices(column, order) {

    var user = admin_globals.selected_user;
    user.devices = _.orderBy(user.devices, [column], [order]);
    $('#sym-table-devices .sym-table-item:not(.sym-table-item-fake)').remove();
    drawUserDevices(user.devices);
}

/* authorize rep device */
function authorizeRepDevice() {

    var self = $(this);
    var state = !self.prev('input').prop('checked');
    var column = self.closest('.sym-table-column');
    var parentItem = column.closest('.sym-table-item');
    var deviceId = parseInt(parentItem.attr('data-device-id'));
    var deviceName = parentItem.find('[data-column="device_name"] p').html();

    self.trigger('click');

    $('#sym-user-device-authorize-confirm-action').html(state ? 'activate' : 'deactivate');
    $('#sym-user-device-authorize-confirm-name').html(deviceName);
    $('#sym-user-device-authorize-confirm-yes').toggleClass('btn-success', state);

    $('#sym-user-device-authorize-confirm').modal('show');

    $('#sym-user-device-authorize-confirm-yes').off('click').on('click', function () {

        $.ajax({
            'type': 'POST',
            'url': '/administration/user/' + admin_globals.selected_user_id + '/authorize-rep-device/' + deviceId,
            data: {
                state: state ? 1 : 0,
                _token: csrfToken
            }
        }).done(function (response) {

            if (response.success) {

                self.trigger('click');

                admin_globals.selected_user.devices.map(function (device) {
                    if (device.id == deviceId) {
                        device.authorized = state;
                    }
                });

                if ($('#sym-table-devices .sym-table-header [data-sort-type="authorized"]').attr('sort-active') != undefined) {

                    symTableSortDevices('authorized', $('#sym-table-devices .sym-table-header [data-sort-type="authorized"]').attr('data-sort-by'));
                }
            }
        }).always(function (response) {

            symNotification(response);
        });
    });
}

/* delete rep device */
function deleteRepDevice() {

    var self = $(this);
    var parentItem = self.closest('.sym-table-item');
    var parentWrapper = parentItem.parent('.sym-table-items');
    var deviceId = parseInt(parentItem.attr('data-device-id'));
    var deviceName = parentItem.find('[data-column="device_name"] p').html();

    $('#sym-user-device-delete-confirm-name').html(deviceName);

    $('#sym-user-device-delete-confirm').modal('show');

    $('#sym-user-device-delete-confirm-yes').off('click').on('click', function () {

        $.ajax({
            'type': 'DELETE',
            'url': '/administration/user/' + admin_globals.selected_user_id + '/rep-device/' + deviceId,
            data: {
                _token: csrfToken
            }
        }).done(function (response) {

            if (response.success) {

                parentItem.fadeOut(500, function () {

                    parentItem.remove();

                    admin_globals.selected_user.devices = admin_globals.selected_user.devices.filter(function (device) {

                        return device.id != deviceId;
                    });

                    if (parentWrapper.find('.sym-table-item:not(.sym-table-item-fake)').length == 0) {

                        parentWrapper.closest('.sym-table').addClass('sym-table-empty');
                    }
                });
            }
        }).always(function (response) {

            symNotification(response);
        });
    });
}

/* reset rep data */
function resetRepData() {

    var self = $(this);
    var wrapper = self.closest('.sym-form-group[data-form="user-data"]');
    var options = wrapper.find('.sym-input-rep-data:checked');
    var resetOptions = [];

    options.each(function () {

        resetOptions.push($(this).attr('data-action'));
    });

    $('#sym-user-reset-data-confirm').modal('show');

    $('#sym-user-reset-data-confirm-yes').off('click').on('click', function () {

        $.ajax({
            'type': 'DELETE',
            'url': '/administration/user/' + admin_globals.selected_user_id + '/reset-rep-data',
            data: {
                reset_options: resetOptions,
                _token: csrfToken
            }
        }).done(function (response) {

            if (response.success) {

                self.addClass('sym-btn-disabled');
                options.prop('checked', false);

                if (resetOptions.indexOf('reset-device') > -1) {

                    var remainingDeviceReset = parseInt(wrapper.find('.sym-reset-rep-data-options .sym-check-container:nth-child(1) label i').attr('data-remaining-reset'));
                    updateRemainingDeviceReset(remainingDeviceReset - 1);

                    $('#sym-table-devices')
                            .addClass('sym-table-empty')
                            .find('.sym-table-item:not(.sym-table-item-fake)').remove();
                }
            }
        }).always(function (response) {

            symNotification(response);
        });
    });
}
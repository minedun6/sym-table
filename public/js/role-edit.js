$(function () {

    $('#sym-table-roles').on('change', '.sym-input[data-input="role_timeboxed"]', manageRoleTimeBoxed);
});

function manageRoleTimeBoxed() {

    if ($(this).prop('checked')) {

        $('.sym-role-time-boxed-dates').css('display', 'flex');
    } else {

        $('.sym-role-time-boxed-dates').css('display', 'none');
    }

    validateRole();
}

function initTimeBoxedDateBLock(item) {

    item.closest('.sym-table').find('.sym-role-time-boxed-dates').css('display', 'none');

    $('.sym-table[data-content="roles"] .sym-input.datepicker').datetimepicker({
        weekStart: 0,
        todayBtn: 0,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 1,
        showMeridian: 0,
        minView: 2,
        maxView: 2,
        format: 'yyyy-mm-dd',
        pickerPosition: "bottom-left",
        startDate: new Date(),
    }).on('changeDate', function (ev) {

        var endDateTimePicker = $('.sym-table[data-content="roles"] .sym-input.datepicker[data-input="role_end_at"]');

        var startDate = moment(ev.date.valueOf());
        var startDatePlusDayFormated = startDate.add('1', 'days').format('YYYY-MM-DD');
        var endDate = endDateTimePicker.val() != '' ? moment(endDateTimePicker.val()) : null;

        endDateTimePicker.datetimepicker('setStartDate', startDatePlusDayFormated);

        if (!isNull(endDate)) {
            if (endDate.isBefore(startDate)) {
                endDateTimePicker.val(startDatePlusDayFormated);
                endDateTimePicker.datetimepicker('update');
            }
        }

        $(this).datetimepicker('hide');

        symInputCheckEmpty();
        validateRole();
    });
}

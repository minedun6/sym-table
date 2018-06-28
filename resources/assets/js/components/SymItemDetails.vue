<template>

    <div class="sym-table-item-details sym-table-item-details-users"
         style="height: auto; overflow: visible; opacity: 1;" data-user-type="0">
        <div class="sym-table-item-details-container">

            <div class="sym-table-item-details-container-wrapper">

                <div class="sym-form-group sym-form-group-user" data-form="user-basic">

                    <sym-input-text type="text" label="First Name" :isRequired="true" v-model="form.first_name"/>

                    <sym-input-text type="text" label="Last Name" :isRequired="true" v-model="form.last_name"/>

                    <sym-input-text type="text" label="Email" :isRequired="true" v-model="form.email"/>

                    <sym-input-text type="text" label="Re-type Email" :isRequired="true" v-model="form.email_confirm"/>

                    <sym-input-text type="password" label="Password (at least 8 caracters)" :isRequired="true"
                                    v-model="form.password"/>

                    <sym-input-text type="password" label="Re-type Password (at least 8 caracters)" :isRequired="true"
                                    v-model="form.password_confirm"/>
                </div>

                <div class="sym-form-group sym-form-group-user" data-form="user-type">

                    <sym-input-radio-box label="Backoffice user" value="1" v-model="form.user_type"/>

                    <sym-input-radio-box label="Recipient" value="0" v-model="form.user_type"/>

                    <sym-input-radio-box label="Backoffice user and recipient" value="2" v-model="form.user_type"/>

                </div>

                <!-- user roles select-->

                <!-- user permissions -->

                <div class="sym-form-group sym-form-group-buttons" data-form="user-buttons">

                    <div class="sym-btn sym-btn-disabled-grey sym-btn-create" data-action="user-update">
                        <p>Update</p>
                    </div>

                    <div class="sym-btn sym-btn-disabled-grey sym-btn-create" data-action="user-create">
                        <p>Create</p>
                    </div>

                    <div class="sym-btn sym-btn-cancel" data-action="user-cancel">
                        <p>Cancel</p>
                    </div>

                    <div class="sym-check-container" data-action="user-check-update-notify">
                        <label>Notify user on update</label>
                        <input class="sym-input" name="sym-user-update-notify" type="checkbox">
                        <span></span>
                    </div>

                    <div class="sym-check-container" data-action="user-check-create-notify">
                        <label>Notify user on creation</label>
                        <input class="sym-input" name="sym-user-create-notify" type="checkbox">
                        <span></span>
                    </div>

                    <div class="sym-btn sym-btn-user-permission" data-action="user-permissions-collapse"
                         data-state="close">
                        <p>Module and permissions</p>
                        <p>Collapse</p>
                    </div>
                </div>

            </div>

            <!-- user devices -->

            <!-- user data -->
        </div>

    </div>

</template>

<style lang="scss">
    /*-----------------------------------------------------------------------------*/
    /* -> Details <- */
    /*-----------------------------------------------------------------------------*/
    .sym-table-item-selected .sym-table-item-details-users {
        height: 360px;
    }

    .sym-table-item-selected .sym-table-item-details-roles {
        height: 360px;
    }

    .sym-table-item-selected .sym-table-item-details-affiliates {
        height: 360px;
    }

    .sym-table-item-details {
        background-color: transparent;
        box-shadow: none;
    }

    .sym-table-item-details > div.sym-table-item-details-container {
        padding: 0px;
    }

    .sym-table-item-details > div > div {
        position: relative;
        margin-bottom: 15px;
        padding: 15px;
        background-color: #fff;
        box-shadow: 0 5px 5px -5px rgba(0, 0, 0, .3);
    }

    /*-----------------------------------------------------------------------------*/
    /* -> User form <- */
    /*-----------------------------------------------------------------------------*/
    .sym-form-group-user[data-form="user-basic"] {
        height: 200px;
    }

    .sym-form-group-user[data-form="user-basic"] .sym-input-container {
        float: left;
        width: 50%;
        margin: 15px 0px;
    }

    .sym-form-group-user[data-form="user-basic"] .sym-input-container:nth-child(2n+1) {
        padding-right: 8px;
    }

    .sym-form-group-user[data-form="user-basic"] .sym-input-container:nth-child(2n) {
        padding-left: 8px;
    }

    .sym-form-group-user[data-form="user-basic"] .sym-input-container:nth-child(2n) label {
        left: 13px;
    }

    .sym-form-group-user[data-form="user-basic"] .sym-input-container input {
        width: 100%;
    }

    .sym-table-item-selected:not([data-id=""]) ~ .sym-table-item-details .sym-input[type="password"] ~ label sup {
        display: none;
    }

    /*-----------------------------------------------------------------------------*/
    /* -> User type <- */
    /*-----------------------------------------------------------------------------*/
    .sym-form-group-user[data-form="user-type"] {
        display: inline-block;
        margin: 10px -4px 10px 0px;
        width: 50%;
        vertical-align: top;
    }

    .sym-table-item-details-loading .sym-radio-container label {
        position: relative;
        top: -10px;
        font-size: 0px;
        width: 100px;
        height: 10px;
        border-radius: 5px;
        background-color: #f1f1f4;
    }

    /*-----------------------------------------------------------------------------*/
    /* -> User roles <- */
    /*-----------------------------------------------------------------------------*/
    .sym-form-group-user[data-form="user-roles"] {
        display: inline-block;
        margin: 10px 0px;
        width: 50%;
    }

    .sym-table-item-details[data-user-type="0"] .sym-form-group-user[data-form="user-roles"] {
        display: none;
    }

    .role-icon-time-boxed {
        margin-left: -17px;
    }

    .sym-form-group-user[data-form="user-roles"] .tooltip-inner {
        background: #2196f3;
        font-size: 14px;
        line-height: 140%;
    }

    .sym-form-group-user[data-form="user-roles"] .tooltip-arrow {
        border-left-color: #2196f3 !important;
    }

    .sym-form-group-user[data-form="user-roles"] .form-group {
        display: inline-block;
        margin-left: 10px;
    }

    .sym-form-group-user[data-form="user-roles"] .form-group.symmetryk-loading-block {
        width: 25px;
        height: 25px;
    }

    .sym-form-group-user[data-form="user-roles"] .form-group.symmetryk-loading-block .sym-select-user-roles {
        display: none;
    }

    .sym-form-group-user[data-form="user-roles"] .sym-select-container > label {
        margin-left: 10px;
        vertical-align: top;
    }

    .sym-form-group-user[data-form="user-roles"] button {
        top: -5px;
        height: 35px;
        background-color: #2196f3 !important;
        border: none !important;
        border-radius: 4px !important;
        box-shadow: none !important;
    }

    .sym-form-group-user[data-form="user-roles"] input {
        border: 1px solid #2196f3;
    }

    .sym-form-group-user[data-form="user-roles"] button span,
    .sym-form-group-user[data-form="user-roles"] input {
        font-family: 'Lato' !important;
    }

    .sym-form-group-user[data-form="user-roles"] .input-group-addon {
        background-color: #2196f3;
        border: 1px solid #2196f3;
        width: 40px !important;
    }

    .sym-form-group-user[data-form="user-roles"] .multiselect-container {
        position: absolute !important;
        top: 30px !important;
    }

    .sym-form-group-user[data-form="user-roles"] .multiselect-clear-filter {
        display: none;
    }

    .sym-form-group-user[data-form="user-roles"] .multiselect-filter .input-group {
        width: 100%;
        padding-right: 7px;
    }

    /*-----------------------------------------------------------------------------*/
    /* -> User permissions <- */
    /*-----------------------------------------------------------------------------*/
    .sym-form-group-user[data-form="user-permissions"] {
        height: 0px;
        overflow: hidden;
        -webkit-transition: all 300ms;
        -moz-transition: all 300ms;
        -ms-transition: all 300ms;
        -o-transition: all 300ms;
        transition: all 300ms;
    }

    .sym-table-item-details[data-user-type="0"] .sym-form-group-user[data-form="user-permissions"] {
        display: none;
    }

    .sym-form-group-user[data-form="user-permissions"].sym-form-group-permissions-open {
        height: 420px;
    }

    .sym-form-group-user[data-form="user-permissions"].sym-form-group-permissions-disabled .sym-table-items {
        position: relative;
    }

    .sym-form-group-user[data-form="user-permissions"].sym-form-group-permissions-disabled .sym-table-items::after {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        cursor: not-allowed;
        background-color: #fff;
        opacity: .2;
        z-index: 99;
    }

    .sym-btn-user-permission {
        float: left !important;
        border: 1px solid #2196f3;
        margin-left: 0px !important;
    }

    .sym-table-item-details[data-user-type="0"] .sym-btn-user-permission,
    .sym-table-item-details-loading .sym-btn-user-permission {
        display: none;
    }

    .sym-btn-user-permission p {
        color: #2196f3;
    }

    .sym-btn-user-permission[data-state="open"] p:first-child {
        display: none;
    }

    .sym-btn-user-permission[data-state="close"] p:last-child {
        display: none;
    }

    .sym-table-module-permission .sym-table-items .sym-table-column > * {
        margin: 0 !important;
        text-align: left !important;
    }

    .sym-table-module-permission .sym-table-items .sym-table-column {
        padding: 0px 0px 0px 10px;
    }

    .sym-table-module-permission .sym-table-column > div > .sym-check-container {
        margin-right: 30px;
    }

    .sym-table-module-permission .sym-table-column > div > .sym-check-container-principle {
        margin-right: 50px;
    }

    .sym-permissions-wrapper {
        padding: 12px 0px 8px 0px;
    }

    .sym-permissions-wrapper-fake label {
        position: relative;
        top: 3px;
        left: 6px;
        width: 100px;
        height: 10px;
        border-radius: 5px;
        background-color: #f1f1f4;
    }

    /*-----------------------------------------------------------------------------*/
    /* -> Details actions <- */
    /*-----------------------------------------------------------------------------*/
    .sym-form-group-buttons {
        position: relative;
        margin-top: 35px;
    }

    .sym-table-item-selected[data-id=""] ~ .sym-table-item-details .sym-btn-add[data-action="user-notify"],
    .sym-table-item-details-loading .sym-btn-add[data-action="user-notify"],
    .sym-table-item-details .sym-btn-create[data-action="user-create"],
    .sym-table-item-details .sym-btn-create[data-action="role-create"],
    .sym-table-item-details .sym-btn-create[data-action="affiliate-create"],
    .sym-table-item-details .sym-check-container[data-action="user-check-create-notify"],
    .sym-table-item-selected[data-id=""] ~ .sym-table-item-details .sym-btn-create[data-action="user-update"],
    .sym-table-item-selected[data-id=""] ~ .sym-table-item-details .sym-btn-create[data-action="role-update"],
    .sym-table-item-selected[data-id=""] ~ .sym-table-item-details .sym-btn-create[data-action="affiliate-update"],
    .sym-table-item-selected[data-id=""] ~ .sym-table-item-details .sym-check-container[data-action="user-check-update-notify"] {
        display: none;
    }

    .sym-table-item-selected[data-id=""] ~ .sym-table-item-details .sym-btn-create[data-action="user-create"],
    .sym-table-item-selected[data-id=""] ~ .sym-table-item-details .sym-btn-create[data-action="role-create"],
    .sym-table-item-selected[data-id=""] ~ .sym-table-item-details .sym-btn-create[data-action="affiliate-create"],
    .sym-table-item-selected[data-id=""] ~ .sym-table-item-details .sym-check-container[data-action="user-check-create-notify"] {
        display: inline-block;
    }

    .sym-check-container[data-action*="user-check"] {
        float: right;
        top: 28%;
    }

    .sym-check-container[data-action*="user-check"] label {
        padding-right: 5px;
        color: #2196f3;
    }

    /*-----------------------------------------------------------------------------*/
    /* -> User devices & data <- */
    /*-----------------------------------------------------------------------------*/
    .sym-table-item-details-loading .sym-table-item-details-container-wrapper[data-form="user-devices"]::after,
    .sym-table-item-details[data-user-type="1"] .sym-table-item-details-container-wrapper[data-form="user-devices"]::after,
    .sym-table-item-details-loading .sym-table-item-details-container-wrapper[data-form="user-data"]::after,
    .sym-table-item-details[data-user-type="1"] .sym-table-item-details-container-wrapper[data-form="user-data"]::after {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .4);
        cursor: not-allowed;
        z-index: 999;
    }

    .sym-table-item-selected[data-id=""] ~ .sym-table-item-details .sym-table-item-details-container-wrapper[data-form="user-devices"],
    .sym-table-item-selected[data-id=""] ~ .sym-table-item-details .sym-table-item-details-container-wrapper[data-form="user-data"] {
        display: none;
    }

    /*-----------------------------------------------------------------------------*/
    /* -> User devices <- */
    /*-----------------------------------------------------------------------------*/
    .sym-table-column-device-connected-0 .sym-pastil,
    .sym-table-column-device-connected-0 .tooltip-inner {
        background-color: #ff5e56;
    }

    .sym-table-column-device-connected-0 .tooltip-arrow {
        border-top-color: #ff5e56 !important;
    }

    .sym-table-column-device-connected-1 .sym-pastil,
    .sym-table-column-device-connected-1 .tooltip-inner {
        background-color: #72daa2;
    }

    .sym-table-column-device-connected-1 .tooltip-arrow {
        border-top-color: #72daa2 !important;
    }

    /*-----------------------------------------------------------------------------*/
    /* -> User data <- */
    /*-----------------------------------------------------------------------------*/
    .sym-form-group-buttons[data-form="user-data-button"] {
        margin-top: 20px;
    }

    .sym-reset-rep-data-options > div {
        padding: 0px 80px 10px 0px;
    }

    .sym-reset-rep-data-options label i {
        font-size: 80%;
        color: #2196f3;
    }

    /*-----------------------------------------------------------------------------*/
    /* -> Forms <- */
    /*-----------------------------------------------------------------------------*/
    .sym-form-group {
        background-color: #fff;
    }

    .sym-form-group-title {
        font-size: 18px;
        color: #2196f3;
        margin-bottom: 15px;
    }

    .sym-form-group-title-error {
        color: #fb7e69;
    }

    .sym-form-group-header {
        border-bottom: 1px solid #f3f4f5;
        margin: 0px -15px;
        padding: 0px 15px 15px;
    }

    .sym-form-group-header h3 {
        margin: 0px;
        color: #2196f3;
        font-size: 18px;
    }

    .sym-form-group-body {
        padding-top: 15px;
    }

    /* check */
    .sym-check-container {
        position: relative;
        display: inline-block;
        padding: 0px 10px 0px 0px;
    }

    .sym-check-container label {
        color: #525a64;
        padding-left: 7px;
    }

    .sym-check-container-principle label {
        color: #2196f3;
    }

    .sym-check-container input {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 14;
        cursor: pointer;
    }

    .sym-check-container span {
        position: relative;
        display: inline-block;
        top: 1px;
        width: 15px;
        height: 15px;
        border: 1px solid #ccced5;
    }

    .sym-check-container span::after {
        content: '';
        display: none;
        position: absolute;
        bottom: 6px;
        left: 6px;
        width: 8px;
        height: 16px;
        border-bottom: 1px solid #2196f3;
        border-right: 1px solid #2196f3;
        transform: rotate(60deg) skew(25deg);
    }

    .sym-check-container input:checked ~ span::after {
        display: block;
    }

    /* select */
    .sym-select-container label {
        color: #525a64;
    }

    .sym-select-container li.active label {
        color: #fff !important;
    }

    /* user roles */
    .sym-table-item:not(.sym-table-item-fake) .sym-table-column[data-column="roles"] {
        display: table;
        height: 100%;
    }

    .sym-table-item:not(.sym-table-item-fake) .sym-table-column[data-column="roles"] p {
        display: table-cell;
        vertical-align: middle;
    }

    .sym-table-item:not(.sym-table-item-fake) .sym-table-column[data-column="roles"] p > span {
        display: block;
    }

    .sym-table-item:not(.sym-table-item-fake) .sym-table-column[data-column="roles"] p > span i {
        font-size: 12px;
        padding-left: 5px;
        width: 0px;
        display: inline-block;
    }

    .sym-table-column[data-column="roles"] .tooltip-inner {
        background: #2196f3;
        font-size: 14px;
        line-height: 140%;
    }

    .sym-table-column[data-column="roles"] .tooltip-arrow {
        border-left-color: #2196f3 !important;
    }

    .sym-table-item-no-match {
        display: none;
    }

    /* user notified */
    .sym-table-item[data-user-notified="0"] .sym-table-column[data-column="notified"] p {
        margin-right: 20px;
        color: #ff7e69;
    }

    .sym-table-item[data-user-notified="1"] .sym-table-column[data-column="notified"] p {
        margin-right: 20px;
        color: #72daa2;
    }

    /* details */
    .sym-table-item-selected .sym-table-column[data-column="name"] {
        width: 400px !important;
    }

    .sym-table-item-selected .sym-table-column[data-column="type"],
    .sym-table-item-selected .sym-table-column[data-column="roles"],
    .sym-table-item-selected .sym-table-column[data-column="notified"] {
        display: none !important;
    }

    /* Modals */
    .sym-modal-placeholder-user-name {
        font-size: 105%;
        color: #15a4fa;
    }

    /* actions */
    .sym-table-column-action[data-action="authorize-user"] {
        margin-top: 20px;
    }

</style>

<script>
    import SymInputText from './SymInputText'
    import SymInputRadioBox from './SymInputRadioBox'

    export default {
        props: ['selectedItem'],
        data() {
            return {
                form: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    email_confirm: '',
                    password: '',
                    password_confirm: '',
                    user_type: 0
                }
            }
        },
        components: {
            SymInputText,
            SymInputRadioBox
        }
    }
</script>
<template>

    <div class="sym-table-item-details sym-table-item-details-users ">
        <div class="sym-table-item-details-container">

            <div class="sym-table-item-details-container-wrapper">

                <div class="sym-form-group sym-form-group-user" data-form="user-basic">
                    <div class="sym-input-container">
                        <input class="sym-input" type="text" data-input="first_name">
                        <label>First name<sup>*</sup></label>
                    </div>
                    <div class="sym-input-container">
                        <input class="sym-input" type="text" data-input="last_name">
                        <label>Last name<sup>*</sup></label>
                    </div>
                    <div class="sym-input-container">
                        <input class="sym-input" type="email" data-input="email">
                        <label>Email<sup>*</sup></label>
                    </div>
                    <div class="sym-input-container">
                        <input class="sym-input" type="email" data-input="email_confirm">
                        <label>Re-type email<sup>*</sup></label>
                    </div>
                    <div class="sym-input-container">
                        <input class="sym-input" type="password" data-input="password">
                        <label>Password<sup>*</sup> (at least 8 characters)</label>
                    </div>
                    <div class="sym-input-container">
                        <input class="sym-input" type="password" data-input="password_confirm">
                        <label>Re-type password<sup>*</sup> (at least 8 characters)</label>
                    </div>
                </div>

                <div class="sym-form-group sym-form-group-user" data-form="user-type">
                    <div class="sym-radio-container">
                        <label>Backoffice user</label>
                        <input class="sym-input" name="sym-user-type" type="radio" data-user-type="1" checked>
                        <span></span>
                    </div>

                    <div class="sym-radio-container">
                        <label>Recipient</label>
                        <input class="sym-input" name="sym-user-type" type="radio" data-user-type="0">
                        <span></span>
                    </div>

                    <div class="sym-radio-container">
                        <label>Backoffice user and recipient</label>
                        <input class="sym-input" name="sym-user-type" type="radio" data-user-type="2">
                        <span></span>
                    </div>

                </div>

                <!--@include('administration.partials.roles_permissions')-->

                <div class="sym-form-group sym-form-group-buttons" data-form="user-buttons">

                    <div class="sym-btn sym-btn-disabled-grey sym-btn-create" data-action="user-create">
                        <p>Create</p>
                    </div>

                    <div class="sym-btn sym-btn-cancel" data-action="user-cancel">
                        <p>Cancel</p>
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

            <!-- include the rep specific -->
            <!--@include('administration.partials.rep_specific')-->

        </div>

    </div>

</template>

<script>
    export default {}
</script>

<style>

</style>
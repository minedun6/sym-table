<template>

    <div class="sym-table-item-details sym-table-item-details-users" style="height: auto; overflow: visible; opacity: 1;" data-user-type="0">
        <div class="sym-table-item-details-container">

            <div class="sym-table-item-details-container-wrapper">

                <div class="sym-form-group sym-form-group-user" data-form="user-basic">

                    <sym-input-text label="First Name" :isRequired="true" v-model="form.first_name" />
                    
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
                        <input class="sym-input sym-input-empty" type="password" data-input="password">
                        <label>Password<sup>*</sup> (at least 8 characters)</label>
                    </div>
                    <div class="sym-input-container">
                        <input class="sym-input sym-input-empty" type="password" data-input="password_confirm">
                        <label>Re-type password<sup>*</sup> (at least 8 characters)</label>
                    </div>
                </div>

                <div class="sym-form-group sym-form-group-user" data-form="user-type">
                    <div class="sym-radio-container">
                        <label>Backoffice user</label>
                        <input class="sym-input" name="sym-user-type" type="radio" data-user-type="1" checked="">
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
                <div class="sym-form-group sym-form-group-user" data-form="user-roles">

                    <div class="sym-select-container">
                        <label>Select roles</label>
                        <div class="form-group symmetryk-loading-block">
            <span class="multiselect-native-select"><select class="sym-select-user-roles" name="sym-select-user-roles" multiple="multiple">
                <option value="other">-- Custom permissions --</option>
            <option data-permissions="audit.full" value="15" data-time-boxed="0">Audit Trail Role</option><option data-permissions="recipients.basic,recipients.forcesync,recipients.screenshot,recipients.email,briefcases.create,briefcases.update,briefcases.delete,administration.bouser_create,administration.bouser_update,administration.bouser_delete,administration.bouser_authorize,administration.recipient_create,administration.recipient_update,administration.recipient_delete,administration.recipient_authorize,administration.role_create,administration.role_update,administration.role_delete,assets.full,tracking.full,settings.full,360.full,idialog.full,regulatory.senddocument,regulatory.validatedocument,survey.full,zinc.full,veeva.import,veeva.export,veeva.publishinapprovaldocs" value="6" data-time-boxed="0">master role</option><option data-permissions="orders.full" value="16" data-time-boxed="0">Order Role</option><option data-permissions="recipients.basic,recipients.forcesync,recipients.screenshot,recipients.email,briefcases.create,briefcases.update,briefcases.delete,assets.full,tracking.full,settings.full,360.full,idialog.full,regulatory.senddocument,regulatory.validatedocument,survey.full,zinc.full,veeva.import,veeva.export,veeva.publishinapprovaldocs,regulatory.reviewdocument" value="5" data-time-boxed="0">pm role</option><option data-permissions="assets.full,regulatory.senddocument,regulatory.validatedocument,regulatory.reviewdocument" value="12" data-time-boxed="0">Regulatory full</option><option data-permissions="assets.full" value="14" data-time-boxed="1" data-dates="Start date : 2016-01-07</br>End date : 2020-10-07">Time boxed current role</option><option data-permissions="briefcases.create,briefcases.update,assets.full" value="13" data-time-boxed="1" data-dates="Start date : 2020-01-07</br>End date : 2020-01-07">Time boxed futur role</option></select><div class="btn-group"><button type="button" class="multiselect dropdown-toggle btn btn-default" data-toggle="dropdown" title="None selected"><span class="multiselect-selected-text">None selected</span> <b class="caret"></b></button><ul class="multiselect-container dropdown-menu"><li class="multiselect-item multiselect-filter" value="0"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text" placeholder="Search"><span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="glyphicon glyphicon-remove-circle"></i></button></span></div></li><li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="other"> -- Custom permissions --</label></a></li><li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="15"> Audit Trail Role</label></a></li><li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="6"> master role</label></a></li><li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="16"> Order Role</label></a></li><li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="5"> pm role</label></a></li><li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="12"> Regulatory full</label></a></li><li><a tabindex="0"><label class="checkbox" aria-hidden="true" data-html="true" data-toggle="tooltip" data-placement="left" data-original-title="Start date : 2016-01-07</br>End date : 2020-10-07"><i class="fa fa-clock-o role-icon-time-boxed"></i><input type="checkbox" value="14"> Time boxed current role</label></a></li><li><a tabindex="0"><label class="checkbox" aria-hidden="true" data-html="true" data-toggle="tooltip" data-placement="left" data-original-title="Start date : 2020-01-07</br>End date : 2020-01-07"><i class="fa fa-clock-o role-icon-time-boxed"></i><input type="checkbox" value="13"> Time boxed futur role</label></a></li></ul></div></span>
                        </div>
                    </div>

                </div>

                <div class="sym-form-group sym-form-group-user" data-form="user-permissions">

                    <h2 class="sym-form-group-title">Module and permissions</h2>

                    <div class="sym-tab-header">
                        <div class="sym-tab-header-tabs">

                            <div class="sym-tab-header-tab sym-tab-header-tab-active" data-tab-target="module-basic">
                                <p>Basic</p>
                            </div>

                            <div class="sym-tab-header-tab" data-tab-target="module-optional">
                                <p>Optional</p>
                            </div>

                        </div>
                    </div>

                    <div class="sym-tab-body">

                        <div class="sym-tab-body-block sym-tab-body-block-active" data-tab="module-basic">

                            <div class="sym-table sym-table-small sym-table-module-permission" data-content="basic">

                                <div class="sym-table-header">
                                    <div class="sym-table-column sym-table-column-25 sym-table-column-l" data-column="module_name">
                                        <p>Module</p>
                                    </div>
                                    <div class="sym-table-column sym-table-column-75 sym-table-column-l" data-column="module_permissions">
                                        <p>Permissions</p>
                                    </div>
                                </div>

                                <div class="sym-table-items">

                                    <div class="sym-table-item">
                                        <div class="sym-table-column sym-table-column-25 sym-table-column-l" data-column="module_name">
                                            <div class="sym-permissions-wrapper">
                                                <div class="sym-check-container sym-check-container-principle">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-key="recipients">
                                                    <span></span>
                                                    <label>Recipients</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sym-table-column sym-table-column-75 sym-table-column-l" data-column="module_permissions">
                                            <div class="sym-permissions-wrapper">
                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="4" data-permission-key="recipients.basic" data-permission-parent="recipients">
                                                    <span></span>
                                                    <label>basic</label>
                                                </div>


                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="5" data-permission-key="recipients.forcesync" data-permission-parent="recipients">
                                                    <span></span>
                                                    <label>force sync</label>
                                                </div>


                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="6" data-permission-key="recipients.screenshot" data-permission-parent="recipients">
                                                    <span></span>
                                                    <label>screenshot</label>
                                                </div>


                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="7" data-permission-key="recipients.email" data-permission-parent="recipients">
                                                    <span></span>
                                                    <label>email</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                    <div class="sym-table-item">
                                        <div class="sym-table-column sym-table-column-25 sym-table-column-l" data-column="module_name">
                                            <div class="sym-permissions-wrapper">
                                                <div class="sym-check-container sym-check-container-principle">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-key="briefcases">
                                                    <span></span>
                                                    <label>Briefcases</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sym-table-column sym-table-column-75 sym-table-column-l" data-column="module_permissions">
                                            <div class="sym-permissions-wrapper">
                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="12" data-permission-key="briefcases.create" data-permission-parent="briefcases">
                                                    <span></span>
                                                    <label>create</label>
                                                </div>


                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="13" data-permission-key="briefcases.update" data-permission-parent="briefcases">
                                                    <span></span>
                                                    <label>update</label>
                                                </div>


                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="14" data-permission-key="briefcases.delete" data-permission-parent="briefcases">
                                                    <span></span>
                                                    <label>delete</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                    <div class="sym-table-item">
                                        <div class="sym-table-column sym-table-column-25 sym-table-column-l" data-column="module_name">
                                            <div class="sym-permissions-wrapper">
                                                <div class="sym-check-container sym-check-container-principle">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-key="administration">
                                                    <span></span>
                                                    <label>Administration</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sym-table-column sym-table-column-75 sym-table-column-l" data-column="module_permissions">
                                            <div class="sym-permissions-wrapper">
                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container sym-check-container-principle" style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="undefined" data-permission-key="administration.bouser" data-permission-parent="administration">
                                                    <span></span>
                                                    <label>BO user</label>
                                                </div>


                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="38" data-permission-key="administration.bouser_create" data-permission-parent="administration.bouser">
                                                    <span></span>
                                                    <label>create</label>
                                                </div>


                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="39" data-permission-key="administration.bouser_update" data-permission-parent="administration.bouser">
                                                    <span></span>
                                                    <label>update</label>
                                                </div>


                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="40" data-permission-key="administration.bouser_delete" data-permission-parent="administration.bouser">
                                                    <span></span>
                                                    <label>delete</label>
                                                </div>


                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="41" data-permission-key="administration.bouser_authorize" data-permission-parent="administration.bouser">
                                                    <span></span>
                                                    <label>activate/deactivate</label>
                                                </div>

                                            </div><div class="sym-permissions-wrapper">
                                            <p style="display: none;">-</p>
                                            <div class="sym-check-container sym-check-container-principle" style="display: inline-block;">
                                                <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="undefined" data-permission-key="administration.recipient" data-permission-parent="administration">
                                                <span></span>
                                                <label>Recipient</label>
                                            </div>


                                            <p style="display: none;">-</p>
                                            <div class="sym-check-container " style="display: inline-block;">
                                                <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="42" data-permission-key="administration.recipient_create" data-permission-parent="administration.recipient">
                                                <span></span>
                                                <label>create</label>
                                            </div>


                                            <p style="display: none;">-</p>
                                            <div class="sym-check-container " style="display: inline-block;">
                                                <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="43" data-permission-key="administration.recipient_update" data-permission-parent="administration.recipient">
                                                <span></span>
                                                <label>update</label>
                                            </div>


                                            <p style="display: none;">-</p>
                                            <div class="sym-check-container " style="display: inline-block;">
                                                <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="44" data-permission-key="administration.recipient_delete" data-permission-parent="administration.recipient">
                                                <span></span>
                                                <label>delete</label>
                                            </div>


                                            <p style="display: none;">-</p>
                                            <div class="sym-check-container " style="display: inline-block;">
                                                <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="45" data-permission-key="administration.recipient_authorize" data-permission-parent="administration.recipient">
                                                <span></span>
                                                <label>activate/deactivate</label>
                                            </div>

                                        </div><div class="sym-permissions-wrapper">
                                            <p style="display: none;">-</p>
                                            <div class="sym-check-container sym-check-container-principle" style="display: inline-block;">
                                                <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="undefined" data-permission-key="administration.role" data-permission-parent="administration">
                                                <span></span>
                                                <label>Role</label>
                                            </div>


                                            <p style="display: none;">-</p>
                                            <div class="sym-check-container " style="display: inline-block;">
                                                <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="46" data-permission-key="administration.role_create" data-permission-parent="administration.role">
                                                <span></span>
                                                <label>create</label>
                                            </div>


                                            <p style="display: none;">-</p>
                                            <div class="sym-check-container " style="display: inline-block;">
                                                <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="47" data-permission-key="administration.role_update" data-permission-parent="administration.role">
                                                <span></span>
                                                <label>update</label>
                                            </div>


                                            <p style="display: none;">-</p>
                                            <div class="sym-check-container " style="display: inline-block;">
                                                <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="48" data-permission-key="administration.role_delete" data-permission-parent="administration.role">
                                                <span></span>
                                                <label>delete</label>
                                            </div>

                                        </div>
                                        </div>
                                    </div>



                                    <div class="sym-table-item">
                                        <div class="sym-table-column sym-table-column-25 sym-table-column-l" data-column="module_name">
                                            <div class="sym-permissions-wrapper">
                                                <div class="sym-check-container sym-check-container-principle">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-key="assets">
                                                    <span></span>
                                                    <label>My Assets</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sym-table-column sym-table-column-75 sym-table-column-l" data-column="module_permissions">
                                            <div class="sym-permissions-wrapper">
                                                <p style="display: block;">-</p>
                                                <div class="sym-check-container " style="display: none;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="18" data-permission-key="assets.full" data-permission-parent="assets">
                                                    <span></span>
                                                    <label>full</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="sym-tab-body-block sym-tab-body-block" data-tab="module-optional">

                            <div class="sym-table sym-table-small sym-table-module-permission" data-content="optional">

                                <div class="sym-table-header">
                                    <div class="sym-table-column sym-table-column-25 sym-table-column-l" data-column="module_name">
                                        <p>Module</p>
                                    </div>
                                    <div class="sym-table-column sym-table-column-75 sym-table-column-l" data-column="module_permissions">
                                        <p>Permissions</p>
                                    </div>
                                </div>

                                <div class="sym-table-items">

                                    <div class="sym-table-item">
                                        <div class="sym-table-column sym-table-column-25 sym-table-column-l" data-column="module_name">
                                            <div class="sym-permissions-wrapper">
                                                <div class="sym-check-container sym-check-container-principle">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-key="tracking">
                                                    <span></span>
                                                    <label>Usage Tracking</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sym-table-column sym-table-column-75 sym-table-column-l" data-column="module_permissions">
                                            <div class="sym-permissions-wrapper">
                                                <p style="display: block;">-</p>
                                                <div class="sym-check-container " style="display: none;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="19" data-permission-key="tracking.full" data-permission-parent="tracking">
                                                    <span></span>
                                                    <label>full</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                    <div class="sym-table-item">
                                        <div class="sym-table-column sym-table-column-25 sym-table-column-l" data-column="module_name">
                                            <div class="sym-permissions-wrapper">
                                                <div class="sym-check-container sym-check-container-principle">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-key="settings">
                                                    <span></span>
                                                    <label>Settings</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sym-table-column sym-table-column-75 sym-table-column-l" data-column="module_permissions">
                                            <div class="sym-permissions-wrapper">
                                                <p style="display: block;">-</p>
                                                <div class="sym-check-container " style="display: none;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="23" data-permission-key="settings.full" data-permission-parent="settings">
                                                    <span></span>
                                                    <label>full</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                    <div class="sym-table-item">
                                        <div class="sym-table-column sym-table-column-25 sym-table-column-l" data-column="module_name">
                                            <div class="sym-permissions-wrapper">
                                                <div class="sym-check-container sym-check-container-principle">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-key="360">
                                                    <span></span>
                                                    <label>360</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sym-table-column sym-table-column-75 sym-table-column-l" data-column="module_permissions">
                                            <div class="sym-permissions-wrapper">
                                                <p style="display: block;">-</p>
                                                <div class="sym-check-container " style="display: none;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="24" data-permission-key="360.full" data-permission-parent="360">
                                                    <span></span>
                                                    <label>full</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                    <div class="sym-table-item">
                                        <div class="sym-table-column sym-table-column-25 sym-table-column-l" data-column="module_name">
                                            <div class="sym-permissions-wrapper">
                                                <div class="sym-check-container sym-check-container-principle">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-key="idialog">
                                                    <span></span>
                                                    <label>Dialog</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sym-table-column sym-table-column-75 sym-table-column-l" data-column="module_permissions">
                                            <div class="sym-permissions-wrapper">
                                                <p style="display: block;">-</p>
                                                <div class="sym-check-container " style="display: none;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="25" data-permission-key="idialog.full" data-permission-parent="idialog">
                                                    <span></span>
                                                    <label>full</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                    <div class="sym-table-item">
                                        <div class="sym-table-column sym-table-column-25 sym-table-column-l" data-column="module_name">
                                            <div class="sym-permissions-wrapper">
                                                <div class="sym-check-container sym-check-container-principle">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-key="regulatory">
                                                    <span></span>
                                                    <label>Regulatory</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sym-table-column sym-table-column-75 sym-table-column-l" data-column="module_permissions">
                                            <div class="sym-permissions-wrapper">
                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="26" data-permission-key="regulatory.senddocument" data-permission-parent="regulatory">
                                                    <span></span>
                                                    <label>send document</label>
                                                </div>


                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="27" data-permission-key="regulatory.validatedocument" data-permission-parent="regulatory">
                                                    <span></span>
                                                    <label>validate document</label>
                                                </div>


                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="35" data-permission-key="regulatory.reviewdocument" data-permission-parent="regulatory">
                                                    <span></span>
                                                    <label>review document</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                    <div class="sym-table-item">
                                        <div class="sym-table-column sym-table-column-25 sym-table-column-l" data-column="module_name">
                                            <div class="sym-permissions-wrapper">
                                                <div class="sym-check-container sym-check-container-principle">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-key="survey">
                                                    <span></span>
                                                    <label>Survey</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sym-table-column sym-table-column-75 sym-table-column-l" data-column="module_permissions">
                                            <div class="sym-permissions-wrapper">
                                                <p style="display: block;">-</p>
                                                <div class="sym-check-container " style="display: none;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="28" data-permission-key="survey.full" data-permission-parent="survey">
                                                    <span></span>
                                                    <label>full</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                    <div class="sym-table-item">
                                        <div class="sym-table-column sym-table-column-25 sym-table-column-l" data-column="module_name">
                                            <div class="sym-permissions-wrapper">
                                                <div class="sym-check-container sym-check-container-principle">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-key="zinc">
                                                    <span></span>
                                                    <label>Zinc</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sym-table-column sym-table-column-75 sym-table-column-l" data-column="module_permissions">
                                            <div class="sym-permissions-wrapper">
                                                <p style="display: block;">-</p>
                                                <div class="sym-check-container " style="display: none;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="31" data-permission-key="zinc.full" data-permission-parent="zinc">
                                                    <span></span>
                                                    <label>full</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                    <div class="sym-table-item">
                                        <div class="sym-table-column sym-table-column-25 sym-table-column-l" data-column="module_name">
                                            <div class="sym-permissions-wrapper">
                                                <div class="sym-check-container sym-check-container-principle">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-key="veeva">
                                                    <span></span>
                                                    <label>Veeva</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sym-table-column sym-table-column-75 sym-table-column-l" data-column="module_permissions">
                                            <div class="sym-permissions-wrapper">
                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="32" data-permission-key="veeva.import" data-permission-parent="veeva">
                                                    <span></span>
                                                    <label>import</label>
                                                </div>


                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="33" data-permission-key="veeva.export" data-permission-parent="veeva">
                                                    <span></span>
                                                    <label>export</label>
                                                </div>


                                                <p style="display: none;">-</p>
                                                <div class="sym-check-container " style="display: inline-block;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="34" data-permission-key="veeva.publishinapprovaldocs" data-permission-parent="veeva">
                                                    <span></span>
                                                    <label>publish in approval docs</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                    <div class="sym-table-item">
                                        <div class="sym-table-column sym-table-column-25 sym-table-column-l" data-column="module_name">
                                            <div class="sym-permissions-wrapper">
                                                <div class="sym-check-container sym-check-container-principle">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-key="audit">
                                                    <span></span>
                                                    <label>Audit Trail</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sym-table-column sym-table-column-75 sym-table-column-l" data-column="module_permissions">
                                            <div class="sym-permissions-wrapper">
                                                <p style="display: block;">-</p>
                                                <div class="sym-check-container " style="display: none;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="36" data-permission-key="audit.full" data-permission-parent="audit">
                                                    <span></span>
                                                    <label>full</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                    <div class="sym-table-item">
                                        <div class="sym-table-column sym-table-column-25 sym-table-column-l" data-column="module_name">
                                            <div class="sym-permissions-wrapper">
                                                <div class="sym-check-container sym-check-container-principle">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-key="orders">
                                                    <span></span>
                                                    <label>Orders</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sym-table-column sym-table-column-75 sym-table-column-l" data-column="module_permissions">
                                            <div class="sym-permissions-wrapper">
                                                <p style="display: block;">-</p>
                                                <div class="sym-check-container " style="display: none;">
                                                    <input class="sym-input sym-input-permissions" type="checkbox" data-permission-id="37" data-permission-key="orders.full" data-permission-parent="orders">
                                                    <span></span>
                                                    <label>full</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

                    <div class="sym-btn sym-btn-user-permission" data-action="user-permissions-collapse" data-state="close">
                        <p>Module and permissions</p>
                        <p>Collapse</p>
                    </div>
                </div>
            </div>

            <div class="sym-table-item-details-container-wrapper" data-form="user-devices">
                <div class="sym-form-group sym-form-group-user" data-form="user-devices">
                    <div class="sym-form-group-header">
                        <h3>Devices</h3>
                    </div>
                    <div class="sym-form-group-body">
                        <div class="sym-table sym-table-small sym-table-user-devices" id="sym-table-devices" data-content="devices">

                            <div class="sym-table-header">
                                <div class="sym-table-column sym-table-column-20 sym-table-column-l" data-column="device_name" sort="" sort-active="" data-sort-type="device_name" data-sort-by="asc">
                                    <p class="sym-table-sort-active-asc">Name<span class="icon-arrow-down-2" data-sort="asc"></span><span class="icon-arrow-down-2" data-sort="desc"></span></p>
                                </div>
                                <div class="sym-table-column sym-table-column-10 sym-table-column-l" data-column="ios_version" sort="" data-sort-type="ios_version" data-sort-by="asc">
                                    <p>iOS version<span class="icon-arrow-down-2" data-sort="asc"></span><span class="icon-arrow-down-2" data-sort="desc"></span></p>
                                </div>
                                <div class="sym-table-column sym-table-column-15 sym-table-column-l" data-column="sym_version" sort="" data-sort-type="sym_version" data-sort-by="asc">
                                    <p>Symmetryk version<span class="icon-arrow-down-2" data-sort="asc"></span><span class="icon-arrow-down-2" data-sort="desc"></span></p>
                                </div>
                                <div class="sym-table-column sym-table-column-20 sym-table-column-l" data-column="last_login" sort="" data-sort-type="last_login" data-sort-by="asc">
                                    <p>Last login<span class="icon-arrow-down-2" data-sort="asc"></span><span class="icon-arrow-down-2" data-sort="desc"></span></p>
                                </div>
                                <div class="sym-table-column sym-table-column-10" data-column="connected" sort="" data-sort-type="connected" data-sort-by="asc">
                                    <p>Connected<span class="icon-arrow-down-2" data-sort="asc"></span><span class="icon-arrow-down-2" data-sort="desc"></span></p>
                                </div>
                                <div class="sym-table-column sym-table-column-15" data-column="authorized" sort="" data-sort-type="authorized" data-sort-by="asc">
                                    <p>Authorized<span class="icon-arrow-down-2" data-sort="asc"></span><span class="icon-arrow-down-2" data-sort="desc"></span></p>
                                </div>
                                <div class="sym-table-column sym-table-column-10 sym-table-column-r" data-column="actions">
                                    <p></p>
                                </div>
                            </div>

                            <div class="sym-table-items">

                                <div class="sym-table-item sym-table-item-fake" data-id="" data-device-id="">

                                    <div class="sym-table-column sym-table-column-20 sym-table-column-l" data-column="device_name">
                                        <p></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-10 sym-table-column-l" data-column="ios_version">
                                        <p></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-15 sym-table-column-l" data-column="sym-version">
                                        <p></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-20 sym-table-column-l" data-column="last-login">
                                        <p></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-10 sym-table-column-device-connected-" data-column="connected">
                                        <p><span class="sym-pastil" data-toggle="tooltip" data-placement="top" data-original-title=""></span></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-15" data-column="authorized">
                                        <p class="sym-custom-switchery-wrapper"><input type="checkbox" class="sym-custom-switchery" =""="" data-switchery="true" style="display: none;"><span class="switchery" style="box-shadow: rgb(223, 223, 223) 0px 0px 0px 0px inset; border-color: rgb(223, 223, 223); transition: border 0.4s, box-shadow 0.4s;"><small style="left: 0px; transition: left 0.2s;"></small></span></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-10 sym-table-column-r" data-column="actions">
                                        <div class="sym-btn sym-btn-delete" data-action="device-delete">
                                            <p>Delete</p>
                                        </div>
                                    </div>
                                </div>



                                <div class="sym-table-item sym-table-item-fake" data-id="" data-device-id="">

                                    <div class="sym-table-column sym-table-column-20 sym-table-column-l" data-column="device_name">
                                        <p></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-10 sym-table-column-l" data-column="ios_version">
                                        <p></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-15 sym-table-column-l" data-column="sym-version">
                                        <p></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-20 sym-table-column-l" data-column="last-login">
                                        <p></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-10 sym-table-column-device-connected-" data-column="connected">
                                        <p><span class="sym-pastil" data-toggle="tooltip" data-placement="top" data-original-title=""></span></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-15" data-column="authorized">
                                        <p class="sym-custom-switchery-wrapper"><input type="checkbox" class="sym-custom-switchery" =""="" data-switchery="true" style="display: none;"><span class="switchery" style="box-shadow: rgb(223, 223, 223) 0px 0px 0px 0px inset; border-color: rgb(223, 223, 223); transition: border 0.4s, box-shadow 0.4s;"><small style="left: 0px; transition: left 0.2s;"></small></span></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-10 sym-table-column-r" data-column="actions">
                                        <div class="sym-btn sym-btn-delete" data-action="device-delete">
                                            <p>Delete</p>
                                        </div>
                                    </div>
                                </div>



                                <div class="sym-table-item " data-id="4" data-device-id="4">

                                    <div class="sym-table-column sym-table-column-20 sym-table-column-l" data-column="device_name">
                                        <p>iPad 2 de NSM1</p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-10 sym-table-column-l" data-column="ios_version">
                                        <p>11.1</p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-15 sym-table-column-l" data-column="sym-version">
                                        <p>2.1.4 (81)</p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-20 sym-table-column-l" data-column="last-login">
                                        <p>2015-05-13 at 11:40</p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-10 sym-table-column-device-connected-1" data-column="connected">
                                        <p><span class="sym-pastil" data-toggle="tooltip" data-placement="top" data-original-title="Device connected"></span></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-15" data-column="authorized">
                                        <p class="sym-custom-switchery-wrapper"><input type="checkbox" class="sym-custom-switchery" checked="" data-switchery="true" style="display: none;"><span class="switchery" style="background-color: rgb(33, 150, 243); border-color: rgb(33, 150, 243); box-shadow: rgb(33, 150, 243) 0px 0px 0px 16px inset; transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;"><small style="left: 20px; transition: left 0.2s;"></small></span></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-10 sym-table-column-r" data-column="actions">
                                        <div class="sym-btn sym-btn-delete" data-action="device-delete">
                                            <p>Delete</p>
                                        </div>
                                    </div>
                                </div>



                                <div class="sym-table-item " data-id="5" data-device-id="5">

                                    <div class="sym-table-column sym-table-column-20 sym-table-column-l" data-column="device_name">
                                        <p>iPad 2 de NSM2</p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-10 sym-table-column-l" data-column="ios_version">
                                        <p>7.1.2</p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-15 sym-table-column-l" data-column="sym-version">
                                        <p>2.4.5 (102)</p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-20 sym-table-column-l" data-column="last-login">
                                        <p>2015-05-13 at 11:40</p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-10 sym-table-column-device-connected-0" data-column="connected">
                                        <p><span class="sym-pastil" data-toggle="tooltip" data-placement="top" data-original-title="Device not connected"></span></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-15" data-column="authorized">
                                        <p class="sym-custom-switchery-wrapper"><input type="checkbox" class="sym-custom-switchery" checked="" data-switchery="true" style="display: none;"><span class="switchery" style="background-color: rgb(33, 150, 243); border-color: rgb(33, 150, 243); box-shadow: rgb(33, 150, 243) 0px 0px 0px 16px inset; transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;"><small style="left: 20px; transition: left 0.2s;"></small></span></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-10 sym-table-column-r" data-column="actions">
                                        <div class="sym-btn sym-btn-delete" data-action="device-delete">
                                            <p>Delete</p>
                                        </div>
                                    </div>
                                </div>



                                <div class="sym-table-item " data-id="6" data-device-id="6">

                                    <div class="sym-table-column sym-table-column-20 sym-table-column-l" data-column="device_name">
                                        <p>iPad 3 de NSM3</p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-10 sym-table-column-l" data-column="ios_version">
                                        <p>7.1.2</p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-15 sym-table-column-l" data-column="sym-version">
                                        <p>-</p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-20 sym-table-column-l" data-column="last-login">
                                        <p>2015-06-07 at 11:40</p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-10 sym-table-column-device-connected-1" data-column="connected">
                                        <p><span class="sym-pastil" data-toggle="tooltip" data-placement="top" data-original-title="Device connected"></span></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-15" data-column="authorized">
                                        <p class="sym-custom-switchery-wrapper"><input type="checkbox" class="sym-custom-switchery" =""="" data-switchery="true" style="display: none;"><span class="switchery" style="box-shadow: rgb(223, 223, 223) 0px 0px 0px 0px inset; border-color: rgb(223, 223, 223); transition: border 0.4s, box-shadow 0.4s;"><small style="left: 0px; transition: left 0.2s;"></small></span></p>
                                    </div>

                                    <div class="sym-table-column sym-table-column-10 sym-table-column-r" data-column="actions">
                                        <div class="sym-btn sym-btn-delete" data-action="device-delete">
                                            <p>Delete</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="sym-table-item-details-container-wrapper" data-form="user-data">
                <div class="sym-form-group sym-form-group-user" data-form="user-data">
                    <div class="sym-form-group-header">
                        <h3>Delete recipient's data</h3>
                    </div>
                    <div class="sym-form-group-body">

                        <div class="sym-reset-rep-data-options">

                            <div class="sym-check-container">
                                <input class="sym-input sym-input-rep-data" type="checkbox" data-action="reset-device">
                                <span></span>
                                <label>Devices <i data-remaining-reset="2"> (2 reset left)</i></label>
                            </div>

                            <div class="sym-check-container">
                                <input class="sym-input sym-input-rep-data" type="checkbox" data-action="reset-briefcase">
                                <span></span>
                                <label>Assigned briefcases</label>
                            </div>

                            <div class="sym-check-container">
                                <input class="sym-input sym-input-rep-data" type="checkbox" data-action="reset-dialog">
                                <span></span>
                                <label>Dialog (custom presentations)</label>
                            </div>

                            <div class="sym-check-container">
                                <input class="sym-input sym-input-rep-data" type="checkbox" data-action="reset-tracking">
                                <span></span>
                                <label>Tracking data</label>
                            </div>

                            <div class="sym-check-container">
                                <input class="sym-input sym-input-rep-data" type="checkbox" data-action="reset-screenshot">
                                <span></span>
                                <label>Screenshots</label>
                            </div>

                            <div class="sym-check-container">
                                <input class="sym-input sym-input-rep-data" type="checkbox" data-action="reset-survey">
                                <span></span>
                                <label>Surveys</label>
                            </div>

                        </div>

                        <div class="sym-form-group sym-form-group-buttons" data-form="user-data-button">
                            <div class="sym-btn sym-btn-delete sym-btn-disabled" data-action="user-data-delete">
                                <p>Delete</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    import SymInputText from './SymInputText'

    export default {
        props: ['selectedItem'],
        data() {
            return {
                form: {
                    first_name: ''
                }
            }
        },
        components: {
            SymInputText
        }
    }
</script>

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
        box-shadow: 0 5px 5px -5px rgba(0,0,0,.3);
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
        background:#2196f3;
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
    .sym-table-item-details-loading  .sym-btn-user-permission {
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
    .sym-table-column-device-connected-0 .tooltip-inner  {
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

    /* radio */
    .sym-radio-container {
        position: relative;
        display: inline-block;
        padding: 0px 20px 0px 0px;
    }

    .sym-radio-container label {
        color: #525a64;
        padding-right: 2px;
    }

    .sym-radio-container input {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 14;
        cursor: pointer;
    }

    .sym-radio-container span {
        position: relative;
        display: inline-block;
        top: 3px;
        width: 15px;
        height: 15px;
        border: 1px solid #ccced5;
        border-radius: 8px;
    }

    .sym-radio-container span::after {
        content: '';
        display: none;
        position: absolute;
        top: 3px;
        left: 3px;
        width: 7px;
        height: 7px;
        background-color: #2196f3;
        border-radius: 8px;
    }

    .sym-radio-container input:checked ~ span::after {
        display: block;
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
        background:#2196f3;
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
        color:#72daa2;
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
<template>
    <div class="sym-table">

        <div class="sym-table-header">
            <div class="sym-table-column sym-table-column-40 sym-table-column-l"
                 data-column="name"
                 sort
                 sort-active
                 data-sort-type="name"
                 data-sort-by="asc">
                <p>Name</p>
                <span class="fa fa-chevron-down" data-sort="asc"></span>
                <span class="fa fa-chevron-down" data-sort="desc"></span>
            </div>
            <div class="sym-table-column sym-table-column-30 sym-table-column-l"
                 data-column="type"
                 sort
                 data-sort-type="type"
                 data-sort-by="asc">
                <p>Type</p>
                <span class="fa fa-chevron-down" data-sort="asc"></span>
                <span class="fa fa-chevron-down" data-sort="desc"></span>
            </div>
            <div class="sym-table-column sym-table-column-30"
                 data-column="roles">
                <p>Roles</p>
            </div>
        </div>

        <div class="sym-table-items">
            <template v-if="users">
                <div v-for="(user, i) in users" class="sym-table-item sym-table-item-selectable" :key="i">
                    <div class="sym-table-column sym-table-column-40 sym-table-column-l" data-column="name">
                        <p class="sym-table-item-avatar sym-user-avatar">
                            <img :src="`http://i.pravatar.cc/150?img=${user.id}`">
                        </p>
                        <p class="sym-table-item-name sym-user-name">
                            {{ user.name }}
                        </p>
                        <p class="sym-table-item-email sym-user-email">
                            {{ user.email }}
                        </p>
                    </div>

                    <div class="sym-table-column sym-table-column-30 sym-table-column-l" data-column="type">
                        <p class="sym-user-type-0"><span></span>Recipient</p>
                    </div>

                    <div class="sym-table-column sym-table-column-30" data-column="roles">
                        <p>XXXX</p>
                    </div>

                </div>
            </template>
            <template>
                <div class="sym-table-item sym-table-item-selectable sym-table-item-fake">

                    <div class="sym-table-column sym-table-column-40 sym-table-column-l" data-column="name">
                        <p class="sym-table-item-avatar sym-user-avatar"></p>
                        <p class="sym-table-item-name sym-user-name"></p>
                        <p class="sym-table-item-email sym-user-email"></p>
                    </div>

                    <div class="sym-table-column sym-table-column-30 sym-table-column-l" data-column="type">
                        <p class="sym-user-type-"><span></span></p>
                    </div>

                    <div class="sym-table-column sym-table-column-30" data-column="roles">
                        <p></p>
                    </div>

                </div>
            </template>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                roles: [],
                users: null
            }
        },
        mounted() {
            axios.get('/data')
                .then(res => {
                    setTimeout(() => {
                        this.users = res.data.users
                    }, 2000)
                })
        }
    }
</script>

<style lang="scss">
    .sym-table-actions {
        overflow: hidden;
        margin-bottom: 15px;
        background-color: #fff;
        padding: 15px;
        box-shadow: 0 5px 5px -5px rgba(0, 0, 0, .3);
        -webkit-transition: all 300ms;
        -moz-transition: all 300ms;
        -ms-transition: all 300ms;
        -o-transition: all 300ms;
        transition: all 300ms;
    }

    .sym-tab-body-block-item-selected .sym-table-actions {
        height: 0px;
        padding: 0px;
        margin: 0px;
    }

    .sym-table-actions .sym-btn-add {
        padding-left: 50px;
        padding-right: 50px;
    }

    .sym-table-search {
        float: right;
        margin-top: 8px;
    }

    .sym-table-search span {
        position: relative;
        top: 6px;
        left: -2px;
        font-size: 23px;
        color: #2196f3;
        cursor: text;
    }

    .sym-table-search input {
        width: 100px;
        background: transparent;
        border: none;
        font-family: "Open Sans";
        font-size: 16px;
        color: #525a64;
        -webkit-transition: all 300ms;
        -moz-transition: all 300ms;
        -ms-transition: all 300ms;
        -o-transition: all 300ms;
        transition: all 300ms;
    }

    .sym-table-search input:focus {
        width: 200px;
        outline: none;
    }

    .sym-table-search input::placeholder {
        color: #525a64;
    }

    .sym-table-column {
        float: left;
    }

    .sym-table-column-100 {
        width: 100%;
    }

    .sym-table-column-80 {
        width: 80%;
    }

    .sym-table-column-75 {
        width: 75%;
    }

    .sym-table-column-70 {
        width: 70%;
    }

    .sym-table-column-67 {
        width: 67%;
    }

    .sym-table-column-50 {
        width: 50%;
    }

    .sym-table-column-40 {
        width: 40%;
    }

    .sym-table-column-34 {
        width: 34%;
    }

    .sym-table-column-33 {
        width: 33%;
    }

    .sym-table-column-30 {
        width: 30%;
    }

    .sym-table-column-25 {
        width: 25%;
    }

    .sym-table-column-20 {
        width: 20%;
    }

    .sym-table-column p {
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0px 10px;
    }

    .sym-table-column-l p {
        text-align: left;
    }

    .sym-table-column-r p {
        text-align: right;
    }

    /* header */
    .sym-table-header {
        overflow: hidden;
        background-color: #2196f3;
        height: 35px;
        -webkit-transition: all 300ms;
        -moz-transition: all 300ms;
        -ms-transition: all 300ms;
        -o-transition: all 300ms;
        transition: all 300ms;
    }

    .sym-tab-body-block-item-selected .sym-table-item-selected > .sym-table-header {
        height: 0px;
    }

    .sym-table-header .sym-table-column {
        height: 35px;
    }

    .sym-table-header .sym-table-column p {
        font-family: "Open Sans Light";
        font-size: 16px;
        color: #fff;
        margin: 0px;
        margin-top: 6px;
        height: 29px;
    }

    .sym-table-header .sym-table-column-l p {
        text-align: left;
    }

    .sym-table-header .sym-table-column-r p {
        text-align: right;
    }

    /* sort */
    .sym-table-column[sort] {
        cursor: pointer;
    }

    .sym-table-column[sort] p span[data-sort] {
        position: relative;
        display: inline-block;
        font-size: 10px;
        opacity: .4;
        top: 5px;
        left: -3px;
    }

    .sym-table-column[sort] p span[data-sort="asc"] {
        transform: rotate(180deg);
        top: -7px;
        left: 7px;
    }

    .sym-table-column[sort] p.sym-table-sort-active-asc span[data-sort="asc"],
    .sym-table-column[sort] p.sym-table-sort-active-desc span[data-sort="desc"] {
        opacity: 1;
    }

    /* body */
    .sym-table-items {

    }

    .sym-table-item {
        overflow: hidden;
        height: 70px;
        background-color: #fff;
        margin-bottom: 15px;
        box-shadow: 0 5px 5px -5px rgba(0, 0, 0, .3);
        -webkit-transition: background-color 1000ms;
        -moz-transition: background-color 1000ms;
        -ms-transition: background-color 1000ms;
        -o-transition: background-color 1000ms;
        transition: background-color 1000ms;
        clear: both;
    }

    .sym-table-item-selectable {
        cursor: pointer !important;
    }

    .sym-tab-body-block-item-selected .sym-table-item-selected > .sym-table-items > .sym-table-item:not(.sym-table-item-selected) {
        display: none;
    }

    .sym-table-item-selectable:hover {
        background-color: #daefff;
    }

    .sym-table-column > * {
        margin-top: 23px;
        font-family: "Open Sans";
        font-size: 16px;
        text-align: center;
        color: #525a64;
    }

    /* actions column */
    .sym-table-column-actions {
        display: none;
        float: right !important;
    }

    .sym-table-item-selected .sym-table-column-actions {
        display: inline-block;
    }

    .sym-table-column-action {
        float: right;
        padding: 0px 10px;
    }

    .sym-table-column-action p {
        color: #2196f3;
        font-family: 'OS_R';
        overflow: visible;
    }

    .sym-table-column-action-icon {
        display: inline;
        top: 0px;
        color: #fff;
        background-color: #2196f3;
        border-radius: 15px;
        padding: 7px;
        font-size: 15px;
        margin-left: 4px;
        width: auto !important;
    }

    /* user column */
    .sym-user-avatar {
        position: relative;
        display: table;
        overflow: hidden;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        margin-top: 10px;
        margin-left: 10px;
        padding: 0px !important;
        float: left;
        background: #cacdd4;
        cursor: pointer;
    }

    .sym-table-item[data-user-state='0'] {
        opacity: .6;
    }

    .sym-table-item[data-user-state='0'] .sym-user-avatar::after {
        content: 'Disabled';
        position: absolute;
        top: 50%;
        text-align: center;
        margin-top: -9px;
        background: rgba(255, 255, 255, .7);
        color: #666;
        left: -10px;
        right: -10px;
        transform: rotate(-45deg);
        font-size: 12px;
    }

    .sym-user-avatar img {
        vertical-align: middle;
        width: 100%;
    }

    .sym-user-avatar span {
        display: table-cell;
        vertical-align: middle;
        font-size: 24px;
        font-family: "Open Sans Light";
        color: #fff;
        letter-spacing: 1px;
        text-align: center;
    }

    .sym-table-item-name {
        margin: 14px 0px 0px 0px !important;
        font-size: 16px;
        font-family: "Open Sans SemiBold";
        color: #525a64;
        text-align: left !important;
    }

    .sym-table-item-email {
        margin: 2px 0px 0px 60px !important;
        font-family: "Open Sans";
        font-style: italic;
        font-size: 14px;
        color: #7a8089;
        text-align: left !important;
    }

    /* fake */
    .sym-table-item-fake {
        // display: none;
    }

    .sym-table-empty .sym-table-item-fake {
        display: block;
    }

    .sym-table-item-fake.sym-table-item-selected {
        /*display: block;*/
    }

    .sym-table-item-fake .sym-table-column > p {
        display: block;
        height: 10px;
        width: 20%;
        background: #f1f1f4;
        border-radius: 4px;
        margin: 30px auto !important;
    }

    .sym-table-item-fake .sym-table-column-l > p {
        margin: 30px 10px !important;
    }

    .sym-table-item-fake .sym-table-column-r > p {
        margin: 30px 10px !important;
        float: right;
    }

    .sym-table-item-fake .sym-table-column > p.sym-table-item-avatar {
        position: relative;
        float: left;
        margin: 10px 10px !important;
        overflow: hidden;
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }

    .sym-table-item-fake .sym-table-column > p.sym-table-item-avatar::before {
        content: '';
        position: absolute;
        top: 11px;
        left: 15px;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background: #fff;
    }

    .sym-table-item-fake .sym-table-column > p.sym-table-item-avatar::after {
        content: '';
        position: absolute;
        top: 27px;
        left: 8px;
        width: 35px;
        height: 40px;
        border-radius: 18px;
        background: #fff;
    }

    .sym-table-item-fake .sym-table-column > p.sym-table-item-name {
        width: 100px;
        margin: 20px 0px 0px 60px !important;
    }

    .sym-table-item-fake .sym-table-column > p.sym-table-item-email {
        width: 160px;
        margin: 10px 0px 0px 60px !important;
    }

    /* details */
    .sym-table-item-details {
        overflow: hidden;
        height: 0px;
        opacity: 0;
        background-color: #fff;
        box-shadow: 0 5px 5px -5px rgba(0, 0, 0, .3);
        -webkit-transition: all 500ms;
        -moz-transition: all 500ms;
        -ms-transition: all 500ms;
        -o-transition: all 500ms;
        transition: all 500ms;
    }

    .sym-table-item-selected .sym-table-item-details {
        height: 350px;
        opacity: 1;
    }

    .sym-table-item-details-container {
        padding: 15px;
        height: 100%;
    }
</style>
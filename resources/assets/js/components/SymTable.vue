<template>
    <div class="sym-table" :class="{ 'sym-table-item-selected' : selectedItem !== null }">
        <div class="flex justify-end mb-2">
            <div class="relative my-2">
                <input type="search" class="bg-purple-white shadow rounded border-0 p-2 pl-8"
                       placeholder="Search...">
                <div class="absolute pin-l pin-t mt-2 ml-2 text-purple-lighter">
                    <svg version="1.1" class="h-4 text-dark" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 52.966 52.966" style="enable-background:new 0 0 52.966 52.966;" xml:space="preserve">
                            <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
                            c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
                            C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
                            S32.459,40,21.983,40z"></path>
                     </svg>

                </div>
            </div>
        </div>
        <div class="sym-table-header">
            <div v-for="(column, i) in columns"
                 class="sym-table-column cursor-pointer"
                 :class="[ 'sym-table-column-' + column.width, {'sym-table-column-l' : i !== columns.length - 1}]"
                 @click.prevent="toggleOrder(column)"
            >
                <p v-if="column.sortable" class="flex">
                    <span class="mr-2">
                        {{ column.pretty }}
                    </span>
                    <span class="flex flex-col">
                        <span class="fa fa-xs fa-chevron-up"
                              :class="[column.slug === sortColumn && sortOrder === 'desc' ? 'opacity-100' : 'opacity-50']"></span>
                        <span class="fa fa-xs fa-chevron-down"
                              :class="[column.slug === sortColumn && sortOrder === 'asc' ? 'opacity-100' : 'opacity-50']"></span>
                    </span>
                </p>
                <p v-else>
                    {{ column.pretty }}
                </p>
            </div>
        </div>

        <div class="sym-table-items">
            <template v-if="users">
                <div v-for="(user, i) in sortedUsers" class="sym-table-item sym-table-item-selectable" :class="isSelected(user)" :key="i" @click="toggleDetails(user)">

                    <div class="sym-table-column sym-table-column-40 sym-table-column-l" data-column="name">
                        <p class="sym-table-item-avatar sym-user-avatar">
                            <img :src="user.avatar" v-if="user.avatar"/>
                            <span v-else>
                                {{ user.initials }}
                            </span>
                        </p>
                        <p class="sym-table-item-name sym-user-name">
                            {{ user.name }}
                        </p>
                        <p class="sym-table-item-email sym-user-email">
                            {{ user.email }}
                        </p>
                    </div>

                    <div class="sym-table-column sym-table-column-30 sym-table-column-l" data-column="type">
                        <p :class="'sym-user-type-' + user.type">
                            <span></span>
                            {{ userType(user) }}
                        </p>
                    </div>

                    <div class="sym-table-column sym-table-column-30" data-column="roles">
                        <p>
                            <span v-if="user.roles.length === 0">
                                -
                            </span>
                            <span class="block" v-for="role in user.roles" v-else>
                                {{ role.name }}
                            </span>
                        </p>
                    </div>

                </div>
                <sym-item-details v-show="selectedItem !== null" :selectedItem="selectedItem"/>
            </template>
            <template v-else>
                <fake-item-placeholder v-for="i in 5" :key="i"></fake-item-placeholder>
            </template>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import _ from 'lodash'
    import FakeItemPlaceholder from './FakeItemPlaceHolder'
    import SymItemDetails from './SymItemDetails'

    export default {
        components: {
            FakeItemPlaceholder,
            SymItemDetails
        },
        data() {
            return {
                roles: [],
                users: null,
                columns: [
                    {'width': 40, 'pretty': 'Name', 'slug': 'name', 'sortable': true, searchable: true},
                    {'width': 30, 'pretty': 'Type', 'slug': 'type', 'sortable': true, searchable: true},
                    {'width': 30, 'pretty': 'Roles', 'slug': 'roles', 'sortable': false, searchable: false}
                ],
                sortColumn: 'name',
                sortOrder: 'asc',
                selectedItem: null
            }
        },
        computed: {
            // to initially load the users sorted
            sortedUsers() {
                return _.orderBy(this.users, [this.sortColumn], [this.sortOrder])
            },
            userType() {
                return (user) => {
                    if (user.type === 0) {
                        return 'Recipient'
                    } else if (user.type === 1) {
                        return 'BO User'
                    } else if (user.type === 2) {
                        return 'BO User / Recipient'
                    }
                }
            }
        },
        methods: {
            isSelected(user) {
                return { 'sym-table-item-selected' : this.selectedItem !== null && user.id === this.selectedItem.id }
            },
            toggleDetails(item) {
                if (this.selectedItem === null) {
                    this.selectedItem = item
                    return
                }
                this.selectedItem = null
            },
            toggleOrder(column) {
                if (!column.sortable) {
                    return;
                }
                this.sortColumn = column.slug
                if (this.sortOrder === 'asc') {
                    this.sortOrder = 'desc'
                } else {
                    this.sortOrder = 'asc'
                }
            }
        },
        mounted() {
            axios.get('/data')
                .then(res => {
                    setTimeout(() => {
                        this.users = res.data.users
                        this.roles = res.data.roles
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

    .sym-table.sym-table-item-selected .sym-table-actions {
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

    .sym-table.sym-table-item-selected > .sym-table-header {
        height: 0px;
    }

    .sym-table-header .sym-table-column {
        height: 35px;
    }

    .sym-table-header .sym-table-column p {
        font-size: 16px;
        color: #fff;
        margin: 6px 0px 0px;
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
        font-size: 12px;
        opacity: .4;
        top: 5px;
        left: -7.5px;
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

    .sym-table.sym-table-item-selected > .sym-table-items > .sym-table-item:not(.sym-table-item-selected) {
        display: none;
    }

    .sym-table-item-selectable:hover {
        background-color: #daefff;
    }

    .sym-table-column > * {
        margin-top: 23px;
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
        color: #fff;
        letter-spacing: 1px;
        text-align: center;
    }

    .sym-table-item-name {
        margin: 14px 0px 0px 0px !important;
        font-size: 16px;
        color: #525a64;
        text-align: left !important;
    }

    .sym-table-item-email {
        margin: 2px 0px 0px 60px !important;
        font-style: italic;
        font-size: 14px;
        color: #7a8089;
        text-align: left !important;
    }

    /* user type */
    .sym-user-type-0 span,
    .sym-user-type-1 span,
    .sym-user-type-2 span {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 6px;
        margin-right: 4px;
    }

    .sym-user-type-0 span {
        background-color: #ffd362;
    }

    .sym-user-type-1 span {
        background-color: #fe8f6e;
    }

    .sym-user-type-2 span {
        background-color: #43c8e0;
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

</style>
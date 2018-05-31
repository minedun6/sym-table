window.Vue = require('vue');

Vue.component('sym-table', require('./components/SymTable.vue'));

const app = new Vue({
    el: '#app'
});

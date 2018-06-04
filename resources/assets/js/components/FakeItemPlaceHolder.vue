<template>
    <div class="sym-table-item sym-table-item-selectable sym-table-item-fake">

        <div class="sym-table-column sym-table-column-40 sym-table-column-l">
            <p class="sym-table-item-avatar sym-user-avatar"></p>
            <p class="sym-table-item-name sym-user-name"></p>
            <p class="sym-table-item-email sym-user-email"></p>
        </div>

        <div class="sym-table-column sym-table-column-30 sym-table-column-l">
            <p></p>
        </div>

        <div class="sym-table-column sym-table-column-30">
            <p></p>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
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

    @-webkit-keyframes placeHolderShimmer {
        0% {
            background-position: -468px 0
        }
        100% {
            background-position: 468px 0
        }
    }

    @keyframes placeHolderShimmer {
        0% {
            background-position: -468px 0
        }
        100% {
            background-position: 468px 0
        }
    }
</style>
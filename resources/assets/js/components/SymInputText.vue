<template>
	<div class="sym-input-container">
        <input class="sym-input" :class="{ 'sym-input-empty' : value === '' }" type="text" data-input="first_name" @input="handleInput">
        <label>{{ label }}
        	<sup v-if="isRequired">*</sup>
        </label>
    </div>
</template>

<script>
	export default {
		props: ['value', 'label', 'isRequired'],
		methods: {
			handleInput(e) {
				this.$emit('input', e.target.value)
			}
		}
	}
</script>

<style lang="scss">
    .sym-input-container {
        position: relative;
        margin-top: 10px;
    }

    .sym-input-container input {
        border: 1px solid #ccced5;
        color: #525a64;
        border-radius: 4px;
        padding: 0px 10px;
        outline: none;
        font-size: 14px;
        height: 35px;
    }

    .sym-input-container input.sym-input-error {
        border: 1px solid #fb7e69 !important;
    }

    .sym-input-container label {
        position: absolute;
        top: 8px;
        left: 5px;
        padding: 0px 5px;
        color: #ccced5;
        cursor: text;
        background-color: #fff;
        -webkit-transition: all 300ms;
        -moz-transition: all 300ms;
        -ms-transition: all 300ms;
        -o-transition: all 300ms;
        transition: all 300ms;
    }

    .sym-input-container input:not(.sym-input-empty) + label, .sym-input-container input:focus + label {
        top: -10px;
        font-family: 'Lato';
        font-size: 12px;
        color: #2196f3;
    }
</style>
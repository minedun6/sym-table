<template>
	<div class="sym-radio-container">
        <label>{{ label }}</label>
        <input type="radio"
        	class="sym-input" 
        	:value="value" 
        	@change="handleInput"
        	:checked="state"
        	:disabled="disabled"
        	>
        <span></span>
    </div>
</template>

<style lang="scss">
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
</style>

<script>
	export default {
		model: {
            prop: 'modelValue',
            event: 'input'
        },
		props: {
			label: {
				type: String,
				required: true
			},
			value: {
                default: '',
            },
            modelValue: {
                default: undefined,
            },
            checked: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            model: {}
		},
		methods: {
			handleInput(e) {
				this.toggle();
			},
			toggle() {
                this.$emit('input', this.state ? '' : this.value);
            }
		},
		computed: {
			state() {
                if (this.modelValue === undefined) {
                    return this.checked;
                }
                return this.modelValue === this.value;
            }
		},
		watch: {
            checked(newValue) {
                if (newValue !== this.state) {
                    this.toggle();
                }
            }
        },
        mounted() {
            if (this.checked && !this.state) {
                this.toggle();
            }
        }
	}
</script>
<template>
    <div class="page-login">
        <h1 class="page-login__title">Sign in</h1>
        <router-link :to="{name: 'register'}" class="page-login__link">
            Need an account?
        </router-link>
        <mcv-validation-errors v-if="validationErrors" :validation-errors="validationErrors" class="page-login__error"/>
        <form
            @submit.prevent="onSubmit"
            class="page-login__form">

            <fieldset class="page-login__fieldset">
                <input
                    class="page-login__input"
                    type="email"
                    placeholder="Email" 
                    v-model="email"
                />
            </fieldset>

            <fieldset class="page-login__fieldset">
                <input
                    class="page-login__input"
                    type="password"
                    placeholder="Password" 
                    v-model="password"
                />
            </fieldset>

            <button class="page-login__button" :disabled="isSubmitting">
                Sign in
            </button>
        </form>
        
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    import McvValidationErrors from '@/components/ValidationErrors';
    import { actionTypes } from '@/store/modules/auth';

    export default {
        name: 'Login',
        components: {
            McvValidationErrors
        },
        data() {
            return {
                email: '',
                password: ''
            }
        },
        computed: {
            ...mapState({
                isSubmitting: state => state.auth.isSubmitting,
                validationErrors: state => state.auth.validationErrors
            })
        },
        methods: {
            onSubmit() {
                console.log('subbmitted form');
                this.$store.dispatch(actionTypes.login, {
                    email: this.email,
                    password: this.password
                })
                .then(() => {
                    this.$router.push({name: 'globalFeed'});
                })
            }
        }
    }
</script>

<style>
    .page-login {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 541px;
        font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;
    }

    .page-login__title {
        font-size: 40px;
        font-weight: 500;
        line-height: 1.1;
        text-align: center;
        margin: 0 0 8px;
    }

    .page-login__form {
        display: flex;
        margin: 0;
        padding: 0;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

    .page-login__fieldset {
        margin: 16px 0 0;
        padding: 0;
        border: none;
    }

    .page-login__input {
        margin: 0;
        padding: 12px 24px;
        font-size: 20px;
        line-height: 20px;
        color: #55595c;
        width: 540px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-sizing: border-box;
    }

    .page-login__button {
        width: 300px;
        background-color: #5CB85C;
        padding: 12px 24px;
        margin: 50px auto 0;
        font-size: 20px;
        line-height: 20px;
        color: #FFF;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.15);
    }

    .page-login__link {
        color: #5CB85C;
        text-decoration: none;
        text-align: center;
        font-size: 16px;
        line-height: 20px;
    }

    .page-login__error {
        color: #B85C5C;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
    }

</style>
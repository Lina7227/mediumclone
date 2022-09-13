<template>
    <div class="page-register">
        <h1 class="page-register__title">Sing Up</h1>
        <p>
            <!-- <router-link :to="{name: 'login'}">
                Need an account?
            </router-link> -->
        </p>
        <form
            @submit.prevent="onSubmit"
            class="page-register__form">

            <fieldset class="page-register__fieldset">
                <input
                    class="page-register__input"
                    type="text"
                    placeholder="Username" 
                />
            </fieldset>

            <fieldset class="page-register__fieldset">
                <input
                    class="page-register__input"
                    type="email"
                    placeholder="Email" 
                />
            </fieldset>

            <fieldset class="page-register__fieldset">
                <input
                    class="page-register__input"
                    type="password"
                    placeholder="Password" 
                />
            </fieldset>

            <button class="page-register__button">
                Sign up
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        methods: {
            onSubmit() {
                console.log('subbmitted form')
            }
        }
    }
</script>

<style>
    .page-register {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 541px;
    }

    .page-register__title {
        font-size: 40px;
        font-weight: 500;
        line-height: 1.1;
        text-align: center;
        margin: 0 0 8px;
    }

    .page-register__form {
        display: flex;
        margin: 0;
        padding: 0;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

    .page-register__fieldset {
        margin: 16px 0 0;
        padding: 0;
        border: none;
    }

    .page-register__input {
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

    .page-register__button {
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

</style>
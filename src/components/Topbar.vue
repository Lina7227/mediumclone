<template>
    <nav class="nav__menu">
        <div class="nav__container">
            <router-link :to="{name: 'home'}" class="nav__logo">
                MediumClone
            </router-link>
            <ul class="nav__bar">
                <li class="nav__item">
                    <router-link :to="{name: 'home'}" class="nav__link" active-class="nav__link_ative">
                        Home
                    </router-link>
                </li>
                <template v-if="isLoggedIn">
                    <li class="nav__item">
                        <router-link :to="{name: 'createArticle'}" class="nav__link  nav__link_icon" active-class="nav__link_ative">
                            <div class="nav__icon nav__icon_pen"></div> &nbsp; 
                            <p class="nav__link_text">New Article</p>
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link :to="{name: 'setting'}" class="nav__link  nav__link_icon" active-class="nav__link_ative">
                            <div class="nav__icon nav__icon_setting"></div> &nbsp; 
                            <p class="nav__link_text"> Settings</p>
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link :to="{name: 'userProfile', params: {slug: currentUser.username}}" class="nav__link  nav__link_icon" active-class="nav__link_ative">
                            <img class="nav__image" src="currentUser.image"/> &nbsp; 
                            <p class="nav__link_text">{{ currentUser.username }}</p>
                        </router-link>
                    </li>
                </template>
                <template v-if="isAnonymous">
                    <li class="nav__item">
                        <router-link :to="{name: 'login'}" class="nav__link" active-class="nav__link_ative">
                            <p class="nav__link_text"> Sing in</p>
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link :to="{name: 'register'}" class="nav__link" active-class="nav__link_ative">
                            <p class="nav__link_text">Sign up</p>
                        </router-link>
                    </li>
                </template>
            </ul>
        </div>
    </nav>
</template>

<script>
    import { getterTypes } from '@/store/modules/auth'
    import { mapGetters } from 'vuex';
    export default {
        name: 'McvTopbar',
        computed: {
        ...mapGetters({

            currentUser: getterTypes.currentUser,
            isLoggedIn: getterTypes.isLoggedIn,
            isAnonymous: getterTypes.isAnonymous
        }),
    }
    };
</script>

<style>
    .nav__menu {
        padding: 8px 16px;
        margin: 0;
        display: block;
    }

    .nav__container {
        width: 100%;
        margin: 0;
        padding: 6px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;
    }

    .nav__logo {
        color: #5CB85C;
        font-size: 24px;
        font-weight: 900;
        text-decoration: none;
    }

    .nav__bar {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .nav__item {
        font-size: 16px;
        line-height: 1.5;
        color: #373a3c;
        margin: 0 15px 0;
    }

    .nav__link_icon {
        display: flex;
        flex-direction: row;
    }

    .nav__link_text {
        margin: 0;
        padding: 0;
    }

    .nav__link_text:hover {
        color: rgba(0, 0, 0, 0.7);
    }

    .nav__link {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.3);
    }

    .nav__link_ative {
        color: #000;
        font-weight: 600;
    }

    .nav__icon {
        background-repeat: no-repeat;
        background-position: 100% 100%;
        background-size: cover;
        height: 15px;
        width: 15px;
        margin: 4px 0 0;
    }

    .nav__icon_pen {
        background-image: url('../assets/pen.svg');
    }

    .nav__icon_setting {
        background-image: url('../assets/settings.svg');
    }

</style>
<template>
    <div class="home-page">
        banner
        <div class="home-page__container">
            <div class="home-page__row">
                <div class="home-page__base">
                    <mcv-feed :api-url="apiUrl" />
                </div>
                <div class="home-page__tag">
                    TAG
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import McvFeed from '@/components/Feed';
export default {
    name: 'McvGlobalFeed',
    components: {
        McvFeed
    },
    data() {
        return {
            apiUrl: '/articles'
        }
    }
}

</script>
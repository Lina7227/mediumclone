<template>
    <div class="">
       Feed
    </div>
</template>

<script>
import {actionTypes} from '@/store/modules/feed';

export default {
    name: 'McvFeed',
    props: {
        apiUrl: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl});
    }
}

</script>
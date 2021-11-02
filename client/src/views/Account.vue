<template>
    <div>
        <h1>{{ username }}</h1>
        <h2 v-if="username != userWalletAddr">{{ userWalletAddr }}</h2>
        <div>
            <button class="tablink" style="background-color: rgba(127, 255, 212, 0.836); color: black;" @click="doNothing" id="defaultOpen">Content Owned</button>
            <button class="tablink" style="background-color: rgba(255, 71, 200, 0.822)" @click="doNothing">Content Created</button>
        </div>
        <div class="wrapper">
            <NFTCard v-for="content in content_owned" :key="content.media_url" :creator="content.creator" :media_url="content.media_url" :owner="content.owner" :ask="content.ask" :bid="content.bid"></NFTCard>
        </div>
    </div>
</template>


<script>
import APIService from "../APIService"
import NFTCard from "../components/NFTCard.vue"

export default {
    name: 'Account',
    data() {
        return {
            userWalletAddr: null,
            username: null,
            content_owned: [],
            content_created: []
        };
    },
    components: { 
        NFTCard 
    },
    created() {
        APIService.getUser(this.$route.params.username).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    },
    methods: {
        doNothing() {
            console.log('clicked but did nothin')
        }
    }
}
</script>


<style>
.wrapper {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:1em;
    justify-items: center;
    align-items: center;
}
</style>
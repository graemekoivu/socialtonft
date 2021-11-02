<template>
    <div :class="wrapper">
        <p>{{ creator }}</p>
        <img :src="media_url">
        <p>{{ owner }}</p>
        <p>Ask: {{ ask }}</p>
        <p>Bid: {{ bid }}</p>
        <button>Buy</button>
    </div>
</template>

<script>
export default {
    name: 'NFTCard',
    props: {
        creator: String,
        media_url: String,
        ipfs_hash: String,
        owner: String,
        onSale: Boolean,
        bid: Number,
        ask: Number
    },
    data() {
        return {}
    },

}
</script>

<style>
.wrapper {
    border-radius: 10px;
    background-color: wheat;
}
</style>
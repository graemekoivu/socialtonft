<template>
    <div>
        <p class="error" v-if="error">{{ error }}</p>
        <h1>Select the photos you want to mint as NFT</h1>
        <div class="wrapper">
            <div class="content" v-for="content in content" :item="content" :key="content.media_url">
                <p class="text">{{ content }}</p>
            </div>
        </div>
        <button>Submit</button>
    </div>
</template>

<script>
    import APIService from '../APIService';

    export default {
        name: 'Display',
        data() {
            return {
                content: [],
                error: '',

            }
        },
        async created() {
            try {
                console.log("CODE IS HERE: " + this.$parent.code);
                this.content = await APIService.getDisplay(this.$parent.code);
            } catch(err) {
                this.error = err.message;
            }
        }
    }

</script>

<style>
    .wrapper{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap:1em;
        justify-items: center;
        align-items: center;
    }
    .image{
        border: 10px solid white;
    }
</style>

<!-- ToDo/ use actual img dimensions instead of all made squares -->
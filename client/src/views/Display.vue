<template>
    <div>
        <p class="error" v-if="error">{{ error }}</p>
        <h1>Select the photos you want to mint as NFT</h1>
        <div class="wrapper">
            <div class="content" v-for="(content, i) in content" :item="content" :key="content.media_url">
                <img class="image" :style="[this.content[i].isSelected ? {'border': '10px solid aquamarine', 'border-radius': '10px'} : {'border': '10px solid white'}]" :src="content.media_url" v-on:click="selectDeselect(content.media_url); toggleSelected(i)">
            </div>
        </div>
        <button @click="submitForMinting()">Submit</button>
    </div>
</template>

<script>
    import APIService from '../APIService';
    let urlParams = new URLSearchParams(window.location.search);
    //console.log("url Params: " + urlParams);
    //console.log("route query code: " + this.$route.query.code);

    export default {
        name: 'Display',
        data() {
            return {

                userpage: false,
                display: false,
                code: '',
                content: [],
                selectedContent: [],
                access_token: '',
                error: '',

            }
        },
        async created() {
            //evaluate url params...
            if (urlParams.get('code')) {
                this.code = urlParams.get('code');
                this.display = true;
            } else {
                this.display = false;
            }
            //console.log(this.code)
            try {
                //console.log("CODE IS HERE: " + this.code);
                APIService.getDisplay(this.code)
                    .then((res) => {
                        this.content = res['urls_data'].data.map(obj => ({...obj, isSelected: false}));
                        this.access_token = res['access_token']
                    })
                    .catch((err) => {
                        console.log(err);
                        this.error = err.message;
                    });
            } catch(err) {
                this.error = err.message;
            }
        },
        methods: {
            selectDeselect(media_url) {
                if (this.selectedContent.filter(element => element === media_url).length > 0) {
                    this.selectedContent = this.selectedContent.filter((element) => { return element !== media_url});
                } else {
                    this.selectedContent.push(media_url);
                }
            },
            toggleSelected(i) {
                this.content[i].isSelected = !this.content[i].isSelected;
            },
            submitForMinting() {
                if (this.selectedContent.length <= 0) {
                    alert("No photos selected");
                } else {
                    const post_url = "https://localhost:3443/nfts"
                    const options = {
                        token: this.access_token,
                        urls: this.selectedContent
                    }
                    console.log(options.token);
                    APIService.postNFTs(post_url, options)
                    .then(response => {
                        alert(response);
                    }).catch(err => {
                        console.log(err);
                    })
                    alert("attempted to submit: " + this.selectedContent);
                }
                return true;
            }
        }
    }

</script>

<style scoped>
    .content{
        width: 296px;
        height: 296px;
        padding: 10px;
    }
    .wrapper{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap:1em;
        justify-items: center;
        align-items: center;
    }
    .image{
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
</style>

<!-- ToDo/ use actual img dimensions instead of all made squares -->
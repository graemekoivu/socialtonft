<template>
    <div>
        <button class="tablink" style="background-color: rgba(127, 255, 212, 0.836); color: black;" @click="setupInsta" id="defaultOpen">Create</button>
        <button class="tablink" style="background-color: rgba(255, 71, 200, 0.822)" @click="collectClicked">Collect</button>
    </div>
</template>

<script>
    export default {
        name: 'HomeTabs',
        methods: {
            setupInsta(){
                let appId = "914052029523165";
                let redUri = "https://localhost:3443/";//window.location.origin;//+ "/insta";
                let url = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redUri}&scope=user_profile,user_media&response_type=code`;
                window.open(url, "_blank").focus();
            },
            collectClicked(){
                alert('Collect was clicked');
            }
        }
    }
</script>

<style scoped>
    .tablink {
        color: white;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        font-size: 17px;
        width: 50%;
    }
</style>
<template>
    <div>
        <button class="tablink" onclick="" id="defaultOpen">Content Owned</button>
        <button class="tablink" onclick="">Content Created</button>
    </div>
</template>

<script>
    export default {
        name: 'Tabs'
    }
</script>

<style>
    .tablink {
        background-color: #555;
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
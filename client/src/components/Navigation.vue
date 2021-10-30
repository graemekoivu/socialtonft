<template>
    <header class="topnav" id="theTopnav">
        <nav>
            <a href="#home" class="active" style="margin-right: 40px;">Home</a>
            <input type="text" placeholder="search for users or wallet addresses">
            <ul v-show="!mobile" class="navigation">
                <li><a href="#create" class="link">Create</a></li>
                <li><a href="#collect" class="link">Collect</a></li>
                <button onclick="" style="background-color: rgba(127, 255, 212, 0.836);">
                <i class="fas fa-wallet" style="padding: 7px; font-size: 32px; color: rgba(255, 71, 200, 0.822);"></i>
                </button>
            </ul>
            <a href="javascript:void(0);" @click="toggleMobileNav" v-show="mobile" class="icon" :class="{'icon-active': mobileNav}" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </nav>
    </header>
</template>



<script>

    export default {
        name: "navigation",
        data() {
            return {
                mobile: null,
                mobileNav: null,
                windowWidth: null
            }
        },
        methods: {
            myFunction() {
                var x = document.getElementById("theTopnav");
                if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                    x.className = "topnav";
                }
            }
        }
    }
</script>



<style>

    .topnav {
        overflow: hidden;
        justify-content: center;
        background-color: #333;
        position: static;
        top: 0;
        z-index: 99;
    }
    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        padding: 8px 0;
        width: 80%;
        margin: 0 auto;
        @media (min-width: 1140px) {
            max-width: 1140px;
        }
    }
    .topnav a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }
    input {
        width: 400px;
        font-size: 17px;
    }
    .topnav a:hover {
        background-color: #ddd;
        color: black;
    }
    .topnav a.active {
        background-color: rgb(90, 100, 240);
        color: white;
    }
    .topnav .icon {
        display: none;
        color: white;
    }
    .navigation {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    i {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    @media screen and (max-width: 600px) {
        .topnav a:not(:first-child) {display: none;}
        .topnav a.icon {
            float: right;
            display: block;
        }
    }

    @media screen and (max-width: 600px) {
        .topnav.responsive {position: relative;}
        .topnav.responsive .icon {
            position: absolute;
            right: 0;
            top: 0;
        }
        .topnav.responsive a {
            float: none;
            display: block;
            text-align: left;
        }
    }
</style>
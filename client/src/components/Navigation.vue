<template>
    <header class="topnav" id="theTopnav">
        <nav>
            <a href="#home" class="active" style="margin-right: 40px;">Home</a>
            <input type="text" placeholder="search for users or wallet addresses">
            <ul v-show="!mobile" class="navigation">
                <li><a href="#create" class="link">Create</a></li>
                <li><a href="#collect" class="link">Collect</a></li>
                <button onclick="" style="margin-left: 4px; padding: 0px; background-color: rgba(127, 255, 212, 0.836);">
                <i class="fas fa-wallet" style="padding: 6px; font-size: 32px; color: rgba(255, 71, 200, 0.822);"></i>
                </button>
            </ul>
            <div v-show="mobile" class="icon" style="background-color: rgba(255, 71, 200, 0.822);">
                <i @click="toggleMobileNav" class="fa fa-bars" :class="{'icon-active': mobileNav}" style="color: rgba(127, 255, 212, 0.836);"></i>
            </div>
        </nav>
        <ul v-show="mobileNav" class="drop-navigation">
            <li><a href="#create" class="link">Create</a></li>
            <li><a href="#collect" class="link">Collect</a></li>
            <button onclick="" style="padding: 0px; background-color: rgba(127, 255, 212, 0.836);">
            <i class="fas fa-wallet" style="padding: 6px; font-size: 32px; color: rgba(255, 71, 200, 0.822);"></i>
            </button>
        </ul>
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
        created() {
            window.addEventListener('resize', this.checkScreen);
            this.checkScreen();
        },
        methods: {
            toggleMobileNav() {
                this.mobileNav = !this.mobileNav;
                console.log(this.mobileNav);
            },
            checkScreen() {
                this.windowWidth = window.innerWidth;
                if (this.windowWidth < 900) {
                    this.mobile = true;
                    return;
                }
                this.mobile = false;
                this.mobileNav = false;
                console.log(this.mobileNav);
                return;
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
        width: 90%;
        margin: 0 auto;
        @media (min-width: 900px) {
            max-width: 900px;
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
        width: 60px;
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
    .navigation {
        margin: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .topnav .icon {
        display: flex;
        font-size: 32px;
        padding: 7px 10px;
        margin-left: 40px;
    }
    .drop-navigation {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        list-style-type: none;
    }
</style>
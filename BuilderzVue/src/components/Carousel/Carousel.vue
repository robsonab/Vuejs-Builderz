<template>
    <div id="carousel" class="carousel-block slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carousel" data-slide-to="0" class="active"></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
            <div :class="'carousel-item ' + item.class" v-for="(item) in items" :key="item.key">
                <img :src="item.img" alt="Carousel Image">
                <div class="carousel-caption">
                    <p class="animated fadeInRight">{{ item.description }}
                    </p>
                    <h1 class="animated fadeInLeft">{{ item.header }}</h1>
                    <a class="btn animated fadeInUp" :href="item.link">Get A Quote</a>
                </div>
            </div>
        </div>

        <button class="carousel-control-prev " data-slide="prev" @click="showPrev">
            <span class="carousel-control-prev-icon " aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>

        <button class="carousel-control-next" data-slide="next" @click="showNext">
            <span class="sr-only">Next</span>
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
    </div>
    {{ currentIndex < items.length - 1 }} / {{ currentIndex }} / {{ items.length }}</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

var currentIndex = ref(0);

const items = reactive([
    {
        key: 1,
        header: "For Your Dream Project",
        description: "For Your Dream Project",
        img: "/src/assets/img/carousel-1.jpg",
        link: "#",
        class: ""
    },
    {
        key: 2,
        header: "We Build Your Home",
        description: "Professional Builder",
        img: "/src/assets/img/carousel-2.jpg",
        link: "#",
        class: ""
    }
    , {
        key: 3,
        header: "For Your Dream Home",
        description: "We Are Trusted",
        img: "/src/assets/img/carousel-3.jpg",
        link: "#",
        class: ""
    }, {
        key: 4,
        header: "heade 4",
        description: "Description 4",
        img: "/src/assets/img/blog-1.jpg",
        link: "#",
        class: ""
    }, {
        key: 5,
        header: "heade 5",
        description: "Description 5",
        img: "/src/assets/img/blog-2.jpg",
        link: "#",
        class: ""
    }, {
        key: 6,
        header: "heade 6",
        description: "Description 6",
        img: "/src/assets/img/blog-3.jpg",
        link: "#",
        class: ""
    }
]);

function showPrev() {
    if (currentIndex.value == 0) {
        currentIndex.value = items.length - 1;
    }
    else {
        currentIndex.value--;
    }
    updateItemClass();
}

function showNext() {
    if (currentIndex.value == items.length - 1) { return; }
    currentIndex.value++;
    updateItemClass();
}

function updateItemClass() {
    items.forEach((item, index) => {
        if (index - 1 === currentIndex.value) {
            item.class = "carousel-slide-right active";
        }
        else if (index + 1 === currentIndex.value) {
            item.class = "carousel-slide-left active";
        }
        else if (index === currentIndex.value) {
            item.class = "carousel-slide-active active"
        }
        else {
            item.class = "";
        }
    });

    // if (currentIndex.value == 0) {
    //     items[items.length - 1].class = "carousel-slide-right active";
    // }
}

onMounted(() => {
    updateItemClass();
})
</script>

<style scoped lang="scss">
@import './carousel.scss';

.carousel-item {
    transition: transform 0.5s linear;
}

.carousel-slide-left {
    transform: translateX(-100%);
}

.carousel-slide-right {
    transform: translateX(100%);
}

.carousel-slide-active {
    transform: translateX(0%);
}
</style>
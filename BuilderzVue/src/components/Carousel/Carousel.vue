<template>
    <div id="carousel" class="carousel-block slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li v-for="(item, index) in carouselData.slides" :key="item.key" @click="updateCurrentSlide(index)"
                :class="index == currentIndex ? 'active' : ''">
            </li>
        </ol>

        <div class="carousel-inner">
            <div :class="'carousel-item ' + item.class" v-for="(item) in carouselData.slides" :key="item.key">
                <img :src="item.image" alt="Carousel Image">
                <div class="carousel-caption">
                    <p class="animated fadeInRight">{{ item.subTitle }}
                    </p>
                    <h1 class="animated fadeInLeft">{{ item.title }}</h1>
                    <a class="btn animated fadeInUp" :href="item.link">Get A Quote</a>
                </div>
            </div>
        </div>

        <button class="carousel-control-prev " data-slide="prev" @click="showPrev">
            <span class="carousel-control-prev-icon " aria-hidden="true"></span>
            <span class="sr-only" v-if="carouselData.showTextLabels">{{ carouselData.previousText }}</span>
        </button>

        <button class="carousel-control-next" data-slide="next" @click="showNext">
            <span class="sr-only" v-if="carouselData.showTextLabels">{{ carouselData.nextText }}</span>
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, watchEffect } from 'vue';
import api from '@/API.js'

var currentIndex = ref(0);
var carouselData = reactive({
    previousText: null,
    nextText: null,
    showTextLabels: false,
    slides: []
});

watchEffect(async () => {
    const data = await api.getData('Carousel/82')
        .then(data => {
            data.slides.forEach((item, index) => {
                item.key = index;
                item.class = '';
            });
            return data;
        })

    Object.assign(carouselData, data);

    updateItemClass();

})

function showPrev() {
    if (currentIndex.value == 0) {
        currentIndex.value = carouselData.slides.length - 1;
    }
    else {
        currentIndex.value--;
    }
    updateItemClass();
}

function showNext() {
    if (currentIndex.value == carouselData.slides.length - 1) {
        currentIndex.value = 0;
    }
    else {
        currentIndex.value++;
    }
    updateItemClass();
}

function updateCurrentSlide(index) {
    carouselData.slides.forEach((item) => {
        item.class = "";
    });

    carouselData.slides[currentIndex.value].class = 'active carousel-hide';
    carouselData.slides[index].class = 'active carousel-hide';

    const currentIndexTemp = currentIndex.value;
    currentIndex.value = index;

    setTimeout(() => {
        carouselData.slides[currentIndexTemp].class = '';
        carouselData.slides[currentIndex.value].class = ' carousel-show active';

        setTimeout(() => {
            updateItemClass();
        }, 500);
    }, 100);


}

function updateItemClass() {
    carouselData.slides.forEach((item, index) => {
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

    if (currentIndex.value == 0 && carouselData.slides.length > 1) {
        carouselData.slides[carouselData.slides.length - 1].class = "carousel-slide-left active";
    }
    else if (currentIndex.value === carouselData.slides.length - 1) {
        carouselData.slides[0].class = "carousel-slide-right active";
    }

}

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
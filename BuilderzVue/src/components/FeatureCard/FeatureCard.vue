<template>
    <Transition name="feature">
        <div class="feature" v-if="show">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-12" v-for="item in items.items" :key="item.key">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i :class='item.icon'></i>
                            </div>
                            <div class="feature-text">
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import items from './store';

var show = ref(false);

onMounted(() => {
    show.value = true;
})

</script>

<style scoped>
@import './FeatureCards.css';

.feature-enter-active {
    transition: all 0.8s ease-out;
}

.feature-enter-from,
.feature-leave-to {
    transform: translatey(100px);
    opacity: 0;
}
</style>
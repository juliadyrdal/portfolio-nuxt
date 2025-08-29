<script setup>
import IconUnderlineLarge from '~/assets/underline-large.svg'

defineProps(['title'])
</script>

<template>
    <div class="mt-16 flex flex-col items-center">
        <h2 class="font-rundDisplay font-bold text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-[9rem] px-4 text-center">{{ title }}</h2>
        <IconUnderlineLarge class="w-[16rem] sm:w-[20rem] md:w-[24rem] lg:w-[28rem] xl:w-[32rem] mt-1.5 lg:mt-4" :fontControlled="false" />
    </div>
</template>
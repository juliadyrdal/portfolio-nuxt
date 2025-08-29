<script setup>
defineProps({
  title: String
})
</script>

<template>
    <section class="bg-white border-t-4 border-b-4 border-black">
        <div class="container mx-auto flex flex-col items-center lg:block lg:px-20">
            <div>
                <div class="-mt-[80px] inline-block bg-white border-4 border-black shadow-[6px_6px_0_0_#000] py-2 px-6 font-rundDisplay font-bold text-[1.2rem] lg:text-[1.6rem] text-[#333]">
                {{ title }}
                </div>
            </div>
        </div>

        <div class="container mx-auto px-20">
            <slot name="content"></slot>
        </div>
    </section>
</template>
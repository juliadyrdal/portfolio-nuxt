<script setup>
// Import Heroicons
import { ComputerDesktopIcon, MusicalNoteIcon, BookmarkIcon, TicketIcon, DevicePhoneMobileIcon } from '@heroicons/vue/24/outline'
import IconGithub from '~/assets/github-mi.svg'
// Declare props
const props = defineProps({
    project: { type: Object, required: true },
});

const icons = {
    'music-note': MusicalNoteIcon,
    'bookmark': BookmarkIcon,
    'ticket': TicketIcon,
    'phone': DevicePhoneMobileIcon
}

const heroIcon = icons[props.project.icon]
</script>

<template>
    <!--Project card-->
    <div class="relative flex flex-col lg:flex-row lg:mx-auto border-2 border-[#333]">

        <!--Image container-->
        <div class="hidden lg:flex m-6 min-w-56 min-h-60 bg-white border-2 border-[#333] md:w-1/3 items-center justify-center">
            <component :is="heroIcon" class="w-10 h-10 text-[#333]" />
        </div>
        <!--End Image container-->

        <!--Text content container-->
        <div class="p-6">

            <!--Heading container-->
            <div id="headingContainer" class="absolute -top-8 left-1/2 transform -translate-x-1/2 p-3 border-2 border-[#333] bg-white text-center w-4/5 md:w-auto">
                <h2 class="text-xl md:text-2xl text-[#333] font-bold font-rundDisplay">{{ project.title }}</h2>
            </div>
            <!--End Heading container-->

            <!--Links container-->
            <div>
                <ul class="mt-4 lg:flex gap-10">
                    <li v-if="project.github" class="flex gap-4 items-center">
                        <IconGithub class="h-[2rem]" :fontControlled="false" />
                        <a :href="project.github" target="_blank" class="text-lg hover:underline underline-offset-4">View on Github</a>
                    </li>
                    <li v-if="project.url" class="flex gap-4 items-center">
                        <ComputerDesktopIcon class="size-6" />
                        <a :href="project.url" target="_blank" class="text-lg hover:underline underline-offset-4">View website</a>
                    </li>
                </ul>
            </div>
            <!--Links container-->

            <!--Tech stack-->
            <div v-if="project.tech" class="flex flex-wrap gap-2 mt-4 uppercase">
                <p v-for="tech in project.tech" :key="tech" class="text-sm md:text-base">{{ tech }}<span class="ml-2 md:ml-4">|</span></p>
            </div>
            <!--End Tech stack-->

            <!--Text content-->
            <p class="mt-4 mb-2 text-sm md:text-base">
                {{ project.description }}
                <NuxtLink :to="project.slug" class="pl-2 underline underline-offset-2">Read more...</NuxtLink>
            </p>
            <!--End Text content-->

        </div>
        <!--End Text content container-->

    </div>
    <!--End Project card-->
</template>


<script setup>
// Import icon assets
import IconUnderlineLarge from '~/assets/underline-large.svg'
import IconNumbercircle from '~/assets/numbercircle.svg'
import IconUnderlineXsmall from '~/assets/underline-xsmall.svg'

// Import store
import { useProjectStore } from '@/store/projects'
import { storeToRefs } from 'pinia'

// Access store
const projectStore = useProjectStore()

// Make reactive
const { projects, selectedCategory, displayedProjects } = storeToRefs(projectStore)

// Destructure actions
const { fetchProjects, setCategory } = projectStore

// Fetch projects from content to populate store/state
onMounted(() => {
    fetchProjects()
})

</script>

<template>
    <!--Projects section-->
    <section>
        <div id="projects" class="">
            <!--Projects heading and filters-->
            <div class="flex flex-col items-center">

                <!--Projects section heading-->
                <h2 class="font-rundDisplay font-bold text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-[9rem] px-4 text-center">Projects</h2>
                <IconUnderlineLarge class="w-[16rem] sm:w-[20rem] md:w-[24rem] lg:w-[28rem] xl:w-[32rem]" :fontControlled="false" />
                <!--End Projects section heading-->

                <!--Filter projects-->
                <nav class="my-12 md:my-20">
                    <ul class="flex gap-10 md:gap-32">
                        <li class="text-sm md:text-xl font-rundDisplay">
                            <div class="flex flex-col items-center">
                                <button @click="setCategory('all')">
                                    <span
                                        :class="{ 'font-bold': selectedCategory === 'all' }"
                                        class="pr-10"
                                    >All</span>
                                </button>
                                <IconUnderlineXsmall v-if="selectedCategory === 'all'" class="hidden md:block md:w-[5rem] -ml-5 pt-2" :fontControlled="false" />
                            </div>
                        </li>
                        <li class="text-sm md:text-xl font-rundDisplay">
                            <div class="flex flex-col items-center"> 
                                <button class="flex gap-4"@click="setCategory('webDev')">
                                    <span
                                        :class="{ 'font-bold': selectedCategory === 'webDev' }"
                                    >Web development</span> 
                                    <div class="relative">
                                        <IconNumbercircle class="hidden md:block text-5xl -mt-2" />
                                        <span class="absolute inset-0 flex items-center justify-center text-lg text-black -mt-4">
                                            {{ projects.webDev.length }}
                                        </span>
                                    </div>
                                </button>
                                <IconUnderlineXsmall v-if="selectedCategory === 'webDev'" class="hidden md:block md:w-[5rem] -ml-5 -mt-2" :fontControlled="false" />
                            </div>
                        </li>
                        <li class="text-sm md:text-xl font-rundDisplay">
                            <div class="flex flex-col items-center"> 
                                <button class="flex gap-4" @click="setCategory('ux')">
                                    <span
                                        :class="{ 'font-bold': selectedCategory === 'ux' }"
                                    >UX design</span> 
                                    <div class="relative">
                                        <IconNumbercircle class="hidden md:block text-5xl -mt-2" />
                                        <span class="absolute inset-0 flex items-center justify-center text-lg font-light text-black -mt-4">
                                            {{ projects.ux.length }}
                                        </span>
                                    </div>
                                </button>
                                <IconUnderlineXsmall v-if="selectedCategory === 'ux'" class="hidden md:block md:w-[5rem] -ml-5 -mt-2" :fontControlled="false" />
                            </div>
                        </li>
                    </ul>
                </nav>
                <!--End Filter projects-->

            </div>
            <!--End Projects heading and filters-->

            <!--Project cards-->
            <div class="px-12 pt-4 xl:px-60">
                <ProjectCard v-for="project in displayedProjects" :key="project._path" :project="project" class="mb-24" />
            </div>
            <!--End Project cards-->

         </div>
    </section>
    <!--End Projects section-->
</template>
<script setup>
// Import icon assets
import IconUnderlineLarge from '~/assets/underline-large.svg'
import IconNumber4 from '~/assets/number4.svg'
import IconNumber2 from '~/assets/number2.svg'
import IconUnderlineXsmall from '~/assets/underline-xsmall.svg'

// Import store
import { useProjectStore } from '@/store/projects'
import { storeToRefs } from 'pinia'

// Access store
const projectStore = useProjectStore()

// Make reactive
const { selectedCategory, displayedProjects } = storeToRefs(projectStore)

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
        <div id="projects" class="mt-[110vh]">

            <!--Projects heading and filters-->
            <div class="flex flex-col items-center">

                <!--Projects section heading-->
                <h2 class="font-rundDisplay font-bold text-[6rem] md:text-[9rem]">Projects</h2>
                <IconUnderlineLarge class="w-[24rem] md:w-[32rem]" :fontControlled="false" />
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
                                    <IconNumber4 class="hidden md:block text-5xl -mt-2" />
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
                                    <IconNumber2 class="hidden md:block text-5xl -mt-2" />
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
            <div class="px-12 pt-4 lg:px-60">
                <ProjectCard v-for="project in displayedProjects" :key="project._path" :project="project" class="mb-24" />
            </div>
            <!--End Project cards-->

         </div>
    </section>
    <!--End Projects section-->
</template>
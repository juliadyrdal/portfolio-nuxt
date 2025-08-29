<script setup>
import IconUnderlineSmall from '~/assets/underline-small.svg'
import IconGithub from '~/assets/github-mi.svg'
</script>

<template>
    <header class="w-full overflow-hidden">
        <div class="container mx-auto px-4 mt-4 max-w-full">
     
            <nav class="flex justify-between items-center font-rundDisplay text-[1.2rem] lg:text-[1.4rem] text-[#333]">
                <NuxtLink to="/" v-slot="{ isActive }" class="flex flex-col items-center">
                    <span>Julia Dyrdal</span> 
                    <IconUnderlineSmall :class="['w-22 lg:w-32 text-[#333] transition-opacity duration-200', isActive ? 'opacity-100' : 'opacity-0']" :fontControlled="false" />
                </NuxtLink>

                <div class="flex gap-4 justify-between items-center">
                    <NuxtLink to="/projects" v-slot="{ isActive }" class="flex flex-col items-center">
                        <span>Projects</span> 
                        <IconUnderlineSmall :class="['w-22 lg:w-32 text-[#333] transition-opacity duration-200', isActive ? 'opacity-100' : 'opacity-0']" :fontControlled="false" />
                    </NuxtLink>

                    <a href="https://github.com/juliadyrdal" target="_blank">
                        <IconGithub class="h-[2.5rem] lg:h-[3rem]" :fontControlled="false" />
                    </a>
                </div>
                
            </nav>
     
        </div>
    </header>
</template>
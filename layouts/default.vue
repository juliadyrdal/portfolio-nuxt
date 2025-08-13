<script setup>
    // Import logo assets
    import IconLogo from '~/assets/juliadyrdal-logo.svg'
    import IconUnderlineSmall from '~/assets/underline-small.svg'
    import IconGithub from '~/assets/github-mi.svg'
</script>

<template>
    <!--Header-->
    <header class="w-full overflow-hidden">
        <div class="container mx-auto px-4 mt-4 max-w-full">
            <div class="flex justify-between items-center">
                <NuxtLink to="/">
                    <span class="font-rundDisplay text-[1.2rem]  lg:text-[1.6rem] text-[#333]">Julia Dyrdal</span> 
                    <IconUnderlineSmall class="w-22 lg:w-32 text-[#333]" :fontControlled="false" />
                </NuxtLink>
                <a href="https://github.com/juliadyrdal" target="_blank">
                    <IconGithub class="h-[2.5rem] lg:h-[3rem]" :fontControlled="false" />
                </a>
            </div>
        </div>
    </header>

    <!--Main content slot-->
    <slot />    
    
    <!--Footer-->
    <Footer />
</template>



<script setup>
    // Import logo assets
    import IconLogo from '~/assets/juliadyrdal-logo.svg'
    import IconUnderlineSmall from '~/assets/underline-small.svg'
</script>

<template>
    <!--Header-->
    <header>
        <div class="container mx-4 lg:mx-auto mt-8">
            <div>
                <NuxtLink to="/">
                    <span class="font-rundDisplay text-[1.6rem] text-[#333]">Julia Dyrdal</span> 
                    <IconUnderlineSmall class="w-20 lg:w-32 text-[#333]" :fontControlled="false" />
                </NuxtLink>
            </div>
        </div>
    </header>

    <!--Main content slot-->
    <slot />
    
    <!--Footer-->
    <Footer />
</template>



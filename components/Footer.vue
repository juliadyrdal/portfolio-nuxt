<script setup>
// Import icon assets
import IconSmile from '~/assets/smile.svg'
import IconGithub from '~/assets/github-mi.svg'
import IconPaperPlane from '~/assets/paper-plane.svg'
</script>

<template>
    <!--Footer section-->
    <section class="flex flex-col items-center bg-white">
        <div class="my-28">

            <!--Footer heading-->
            <div class="flex lg:gap-10">
                <h2 class="font-rundDisplay font-bold text-6xl lg:text-8xl">Get in touch</h2>
                <IconSmile class="hidden lg:block h-[6rem] pb-6" :fontControlled="false" />
            </div>
            <!--End Footer heading-->

            <!--Footer links list-->
            <div class="mt-10">
                <ul class="lg:flex gap-16">
                    <li class="flex gap-4 items-center">
                        <IconGithub class="h-[6rem] pb-8" :fontControlled="false" />
                        <a href="http://www.github.com/juliadyrdal" target="_blank" class="-mt-8 text-xl font-bold hover:underline underline-offset-4">@juliadyrdal</a>
                    </li>
                    <li class="flex gap-4 items-center">
                        <IconPaperPlane class="h-[6rem] pb-8" :fontControlled="false" /> 
                        <a href="mailto:juliadyrdal@pm.me" class="-mt-8 text-xl font-bold hover:underline underline-offset-4">juliadyrdal@pm.me</a>
                    </li>
                </ul>
            </div>
            <!--End Footer links list-->

        </div>
    </section>
    <!--End Footer section-->
</template>
<script setup>
// Import icon assets
import IconGithub from '~/assets/github-mi.svg'
import IconPaperPlane from '~/assets/paper-plane.svg'
import IconLinkedin from '~/assets/linkedin.svg'
</script>

<template>
    <!--Footer section-->
    <SectionsDivider title="Get in touch">
        <template #content>
            <div class="flex flex-col items-center lg:block">
                 <div class="mt-20">
                <p class="font-rundDisplay text-center lg:text-start">Always happy to hear from friendly humans.</p>
            </div>

            <div class="mt-16 lg:mt-24 mb-12">
            

                <!--Footer links list-->
                <div class="lg:mt-10">
                    <ul class="flex flex-col gap-5 md:gap-4 lg:flex-row lg:items-center justify-between font-rundDisplay">
                        <li>
                            <a href="http://www.github.com/juliadyrdal" target="_blank" rel="noopener noreferrer" aria-label="GitHub: @juliadyrdal" class="flex items-center gap-3 text-lg lg:text-xl hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-offset-2">
                                <IconGithub class="w-[2rem] lg:w-[4rem]" :fontControlled="false" aria-hidden="true" />
                                @juliadyrdal
                            </a>
                        </li>
                        <li>
                            <a href="mailto:juliadyrdal@pm.me" aria-label="Email: juliadyrdal@pm.me" class="flex items-center gap-3 text-lg lg:text-xl hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-offset-2">
                                <IconPaperPlane class="w-[2rem] lg:w-[4rem]" :fontControlled="false" aria-hidden="true" /> 
                                juliadyrdal@pm.me
                            </a>
                        </li>
                        <li>
                            <a href="https:/www.linkedin.com/in/juliadyrdal" target="_blank" rel="noopener noreferrer" aria-label="Linkedin: Julia Dyrdal" class="flex items-center gap-3 text-lg lg:text-xl hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-offset-2">
                                <IconLinkedin class="w-[2rem] lg:w-[3.5rem] text-white" :fontControlled="false" aria-hidden="true" /> 
                                Julia Dyrdal
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </template>
    </SectionsDivider>
    <!--End Footer section-->
</template>
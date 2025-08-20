<script setup>
import IconDeveloper from '~/assets/developer2.svg'
import IconCode from '~/assets/code.svg' 
import IconEllipse from '~/assets/ellipse.svg' 
import IconArrow from '~/assets/arrow.svg' 


onMounted(() => {
    const designerElement = document.querySelectorAll('#uxIconSvg rect');
    for (let i = 0; i < designerElement.length; i++) {
        console.log(`${i} is ${designerElement[i].getTotalLength()}`)
    }
    const circlePath = document.querySelector('#uxIcon6');
    console.log(`Circle: ${circlePath.getTotalLength()}`);
});
</script>

<template>
    <div>
        <section class="bg-[#F9F9F9] h-svh lg:pb-6">
            <div id="heroContainer" class="absolute top-[12rem] lg:top-[35%] left-1/2 -translate-x-1/2 w-full px-4 lg:px-0">
            <div class="flex flex-col items-center lg:grid lg:grid-cols-6 lg:items-start lg:justify-center">
                <div class="lg:col-span-3 lg:col-start-2 flex flex-col items-center">

            <svg id="uxSvg" class="pb-2 z-20 w-[20rem] sm:w-[30rem] lg:w-[42rem]" width="720" height="120" viewBox="0 0 720 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="ux1" d="M666.357 50.896V31.184H687.349V41.68C690.165 34.896 695.669 29.904 703.989 29.904C709.749 29.904 714.485 31.568 717.557 35.28L717.685 35.664C712.949 39.12 707.957 47.952 707.573 53.84L707.189 53.968C705.653 52.816 702.965 52.176 700.149 52.176C690.549 52.176 687.861 60.496 687.861 70.096V94.544H666.357V50.896Z" fill="white" stroke="black" stroke-width="3"/>
                        <path id="ux2" d="M628.467 96.592C608.115 96.592 594.291 81.488 594.291 62.8C594.291 44.368 608.371 29.136 627.571 29.136C650.355 29.136 663.411 47.568 659.955 69.456H615.283C617.331 75.6 622.451 78.544 628.851 78.544C636.147 78.544 640.627 74.064 641.907 70.096L642.291 69.968C645.491 74.32 653.811 78.544 659.315 78.544L659.443 78.928C653.939 90.704 642.163 96.592 628.467 96.592ZM615.539 54.736H639.603C637.683 49.744 633.587 46.672 627.187 46.672C621.683 46.672 617.587 49.616 615.539 54.736Z" fill="white" stroke="black" stroke-width="3"/>
                        <path id="ux3" d="M523.982 45.776V31.184H544.974V40.784C548.942 33.232 557.134 29.648 564.558 29.648C578.51 29.648 588.494 39.376 588.494 52.816V94.544H566.99V60.624C566.99 53.712 562.382 49.488 556.238 49.488C550.094 49.488 545.486 53.328 545.486 60.752V94.544H523.982V45.776Z" fill="white" stroke="black" stroke-width="3"/>
                        <path id="ux4" d="M475.939 91.216C459.683 91.216 448.419 77.52 448.419 60.368C448.419 43.216 459.683 29.52 475.939 29.52C484.387 29.52 491.683 33.616 494.755 39.376V31.184H515.235V85.968C515.235 106.192 499.875 117.84 480.931 117.84C464.163 117.84 453.539 110.928 448.931 102.48L449.059 102.096C454.819 101.072 463.395 95.312 466.467 90.32H466.851C468.387 94.544 473.379 99.152 481.315 99.152C489.379 99.152 493.987 94.8 493.987 86.992V82.896C490.531 87.888 483.747 91.216 475.939 91.216ZM469.923 60.368C469.923 66.512 474.915 72.016 482.083 72.016C489.251 72.016 494.115 66.64 494.115 60.368C494.115 54.096 489.123 48.72 482.083 48.72C475.043 48.72 469.923 54.224 469.923 60.368Z" fill="white" stroke="black" stroke-width="3"/>
                        <path id="ux5" d="M420.857 94.544V30.8L421.241 30.672C427.001 33.104 436.217 33.104 441.977 30.672L442.361 30.8V94.544H420.857ZM418.425 14.416C418.425 7.76 424.313 2 431.609 2C438.905 2 444.793 7.76 444.793 14.416C444.793 21.072 438.905 26.832 431.609 26.832C424.313 26.832 418.425 21.072 418.425 14.416Z" fill="white" stroke="black" stroke-width="3"/>
                        <path id="ux6" d="M388.558 96.592C373.966 96.592 362.446 89.424 359.758 77.136L359.886 76.752C365.134 77.264 373.582 73.808 376.91 69.84L377.294 69.968C378.318 75.472 383.182 78.928 388.686 78.928C393.038 78.928 394.702 77.136 394.702 75.088C394.702 73.168 393.038 72.272 389.454 71.632L382.67 70.48C368.59 68.048 362.062 61.008 362.062 50.768C362.062 38.736 372.43 29.008 388.558 29.008C404.046 29.008 412.878 37.584 415.31 46.8L415.182 47.184C409.934 46.672 401.486 50 398.03 53.968L397.646 53.84C396.878 48.464 393.038 45.776 388.302 45.776C384.718 45.776 382.67 47.696 382.67 49.488C382.67 51.792 385.614 52.432 388.558 52.944L395.214 53.968C405.582 55.504 415.438 61.264 415.438 74.064C415.438 87.376 404.558 96.592 388.558 96.592Z" fill="white" stroke="black" stroke-width="3"/>
                        <path id="ux7" d="M325.592 96.592C305.24 96.592 291.416 81.488 291.416 62.8C291.416 44.368 305.496 29.136 324.696 29.136C347.48 29.136 360.536 47.568 357.08 69.456H312.408C314.456 75.6 319.576 78.544 325.976 78.544C333.272 78.544 337.752 74.064 339.032 70.096L339.416 69.968C342.616 74.32 350.936 78.544 356.44 78.544L356.568 78.928C351.064 90.704 339.288 96.592 325.592 96.592ZM312.664 54.736H336.728C334.808 49.744 330.712 46.672 324.312 46.672C318.808 46.672 314.712 49.616 312.664 54.736Z" fill="white" stroke="black" stroke-width="3"/>
                        <path id="ux8" d="M204.756 94.544V4.944H242.26C265.172 4.944 286.932 21.328 286.932 49.744C286.932 78.16 265.3 94.544 242.26 94.544H204.756ZM227.796 72.784H239.7C255.06 72.784 262.868 62.672 262.868 49.744C262.868 36.816 254.932 26.704 239.7 26.704H227.796V72.784Z" fill="white" stroke="black" stroke-width="3"/>
                        <path id="ux9" d="M84.4839 94.544L114.18 49.104L86.2759 4.944H114.18L131.332 32.848H131.972L149.38 4.944H176.9L148.484 48.464L177.924 94.544H149.892L131.332 64.848H130.692L112.132 94.544H84.4839Z" fill="white" stroke="black" stroke-width="3"/>
                        <path id="ux10" d="M41.168 96.592C17.872 96.592 2 81.872 2 58.96V4.944H25.04V57.424C25.04 66.256 30.16 74.576 41.168 74.576C52.048 74.576 57.168 66.256 57.168 57.424V4.944H80.208V58.96C80.208 81.872 64.464 96.592 41.168 96.592Z" fill="white" stroke="black" stroke-width="3"/>
                    </svg>
                    <IconDeveloper id="developer" class="-mt-6 lg:mt-0 w-[18rem] sm:w-[24rem] lg:w-[32rem] z-20" :fontControlled="false" />
                    <IconCode id="code" class="hidden lg:block w-[42rem] mt-12 z-20" :fontControlled="false" />
                </div>
                <svg id="uxIconSvg" class="hidden lg:block w-[16rem] text-[#fff] relative -top-[14rem] -left-[10rem] lg:-left-6" width="311" height="736" viewBox="0 0 311 736" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect id="uxIcon1" x="1" y="1" width="309" height="733.617" rx="49" fill="white"/>
                    <rect id="uxIcon2" x="1" y="1" width="309" height="733.617" rx="49" stroke="black" stroke-width="2"/>
                    <rect id="uxIcon3" x="16" y="18" width="280" height="701" rx="49" fill="white"/>
                    <rect id="uxIcon4" x="16" y="18" width="280" height="701" rx="49" stroke="black" stroke-width="2"/>
                    <rect id="uxIcon5" x="121" y="53" width="67" height="7" rx="3.5" stroke="black" stroke-width="2"/>
                    <circle id="uxIcon6" cx="156.5" cy="664.5" r="26.5" stroke="black" stroke-width="2"/>
                </svg>
            </div>
        </div>
        <div class="block lg:hidden flex justify-center mt-[20rem]">
            <div>
                <IconEllipse class="w-[6rem] sm:w-[10rem] mt-6 text-white" :fontControlled="false" />
                <div class="absolute -mt-10 sm:-mt-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div class="flex flex-col gap-3 justify-center">
                        <span class="hidden sm:block text-[#333] font-semibold">Projects</span>
                        <IconArrow class="h-[2rem] text-[#333]" :fontControlled="false" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<style>
#ux1 {
    stroke-dasharray: 231.76;
    stroke-dashoffset: 231.76;
    animation: line-anim 2s ease forwards 4s;
}

#ux2 {
    stroke-dasharray: 358.08;
    stroke-dashoffset: 358.08;
    animation: line-anim 2s ease forwards 3.7s;
}

#ux3 {
    stroke-dasharray: 342.38;
    stroke-dashoffset: 342.38;
    animation: line-anim 2s ease forwards 3.1s;
}

#ux4 {
    stroke-dasharray: 447.67;
    stroke-dashoffset: 447.67;
    animation: line-anim 2s ease forwards 3.1s;
}

#ux5 {
    stroke-dasharray: 251.27;
    stroke-dashoffset: 251.27;
    animation: line-anim 2s ease forwards 2.8s;
}

#ux6 {
    stroke-dasharray: 325.06;
    stroke-dashoffset: 325.06;
    animation: line-anim 2s ease forwards 2.5s;
}

#ux7 {
    stroke-dasharray: 358.08;
    stroke-dashoffset: 358.08;
    animation: line-anim 2s ease forwards 2.2s;
}

#ux8 {
    stroke-dasharray: 449.78;
    stroke-dashoffset: 449.78;
    animation: line-anim 2s ease forwards 1.9s;
}

#ux9 {
    stroke-dasharray: 461.24;
    stroke-dashoffset: 461.24;
    animation: line-anim 2s ease forwards 1.6s;
}

#ux10 {
    stroke-dasharray: 434.25;
    stroke-dashoffset: 434.25;
    animation: line-anim 2s ease forwards 1.3s;
}

@keyframes line-anim {
    to {
        stroke-dashoffset: 0;
    }
}

#uxIcon2 {
    stroke-dasharray: 2001.12;
    stroke-dashoffset: 2001.12;
    animation: line-anim 2s ease forwards;
}

#uxIcon4 {
    stroke-dasharray: 1877.88;
    stroke-dashoffset: 1877.88;
    animation: line-anim 2s ease forwards 0.9s;
}

#uxIcon5 {
    stroke-dasharray: 141.99;
    stroke-dashoffset: 141.99;
    animation: line-anim 2s ease forwards 0.9s;
}

#uxIcon6 {
    stroke-dasharray: 166.52;
    stroke-dashoffset: 166.52;
    animation: line-anim 2s ease forwards 0.9s;
}

#developer {
    opacity: 0;
    animation: fadeIn 2.3s ease forwards 3.3s;
}

#code {
    opacity: 0;
    animation: fadeIn 2.3s ease forwards 4s;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}
</style>


import { NuxtImg } from '../.nuxt/components';
<script setup lang="ts"></script>

<template>
  <footer
    class="min-h-screen flex flex-col justify-between relative px-8 pt-16 pb-0"
  >
    <div
      class="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 mb-20 pt-20"
    >
      <div>
        <p class="text-lg mb-4">Is there a project?</p>
        <h2 class="text-[112px] mt-10 leading-[0.9] underline">
          Let's work <br />
          together
        </h2>
      </div>

      <div class="flex flex-col gap-8 pt-16">
        <div>
          <p class="text-medium text-lg mb-2">For all questions</p>
          <p class="font-medium text-lg">+7 (920) 278—00—68</p>
          <p class="text-lg">qtim@agency.com</p>
        </div>
        <div>
          <p class="text-lg mb-2">Office in Russia</p>
          <p class="text-lg">
            139 Ruben Station Lake<br />
            Drew, NM 52678
          </p>
          <span>
            <img
              src="~/assets/icons/button-location.svg"
              alt="location"
              class="h-12 mt-2"
            />
          </span>
        </div>
        <div>
          <p class="text-lg mb-2">Office in Dubai</p>
          <p class="text-lg">
            139 Ruben Station Lake<br />
            Drew, NM 52678
          </p>
          <span>
            <img
              src="~/assets/icons/button-location.svg"
              alt="location"
              class="h-12 mt-2"
            />
          </span>
        </div>
      </div>
    </div>
    <div class="relative w-full">
      <div
        class="max-w-[1400px] mx-auto w-full flex items-end justify-between relative"
      >
        <div class="flex gap-8 pb-8">
          <a
            href="#"
            class="text-lg hover:opacity-70 transition-opacity underline"
          >
            Facebook
          </a>
          <a
            href="#"
            class="text-lg hover:opacity-70 transition-opacity underline"
          >
            Instagram
          </a>
          <a
            href="#"
            class="text-lg hover:opacity-70 transition-opacity underline"
          >
            Telegram
          </a>
        </div>
        <div class="absolute left-1/2 transform -translate-x-1/2 bottom-0">
          <button
            class="w-[358px] h-[358px] bg-black text-white rounded-full flex items-center justify-center text-4xl font-medium hover:bg-gray-800 transition-colors translate-y-1/2"
          >
            <span class="transform -translate-y-12">Go</span>
          </button>
        </div>

        <div class="flex gap-8 pb-8">
          <a
            href="#"
            class="text-lg hover:opacity-70 transition-opacity underline"
          >
            Behance
          </a>
          <a
            href="#"
            class="text-lg hover:opacity-70 transition-opacity underline"
          >
            LinkedIn
          </a>
          <a
            href="#"
            class="text-lg hover:opacity-70 transition-opacity underline"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  overflow: hidden;
  background-color: #e2beff;
}

.underline {
  text-decoration: underline;
  text-underline-offset: 8px;
}

h2.underline {
  text-underline-offset: 16px;
}
</style>

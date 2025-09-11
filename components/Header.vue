<script setup lang="ts"></script>

<template>
  <header class="w-full flex justify-between items-center py-6 px-8">
    <NuxtLink to="/" class="hover:underline">
      <div class="text-2xl font-bold">QTIM</div>
    </NuxtLink>

    <nav class="flex items-center gap-10">
      <NuxtLink to="#" class="hover:underline">Works</NuxtLink>
      <NuxtLink to="#" class="hover:underline">About</NuxtLink>
      <button
        class="p-1 border border-gray-400 rounded-full hover:bg-gray-100 transition w-8 h-8 flex items-center justify-center"
      >
        <img
          src="~/assets/icons/united-kingdom.svg"
          alt="EN"
          class="w-5 h-5"
        />
      </button>
      <button
        class="px-6 py-2 bg-black text-white rounded-full hover:opacity-80 transition"
      >
        Let's work
      </button>
    </nav>
  </header>
</template>

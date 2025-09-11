<script setup lang="ts">
import { usePostsStore } from "~/stores/posts";

const store = usePostsStore();
const route = useRoute();
const id = route.params.id as string;

const {
  data: post,
  pending,
  error,
} = await useAsyncData(`post-${id}`, () => store.fetchPost(id));
</script>

<template>
  <section class="max-w-[1400px] mx-auto px-8 py-16">
    <div v-if="pending" class="text-center py-20 text-gray-500">
      Loading post...
    </div>

    <div v-else-if="error" class="text-center py-20 text-red-500">
      {{ error.message || "Failed to load post" }}
    </div>

    <article v-else-if="post" class="max-w-4xl mx-auto">
      <h1 class="text-[84px] mb-12">{{ post.title }}</h1>
      <img
        :src="post.image"
        class="w-full h-96 object-cover rounded-lg mb-8"
        :alt="post.image"
      />
      <div class="prose prose-lg max-w-2xl">
        <p class="text-black">About</p>
        <p class="text-black text-[36px]">{{ post.description }}</p>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { usePostsStore } from "~/stores/posts";
import { useRandomImage } from "~/composables/useRandomImage";
import type { Post } from "~/types/post";

const store = usePostsStore();
const route = useRoute();

const postImages = ref<Record<string, string>>({});

const getPostImage = (postId: string): string => {
  if (!postImages.value[postId]) {
    const { randomImage } = useRandomImage(`post-${postId}`);
    postImages.value[postId] = randomImage.value;
  }
  return postImages.value[postId];
};

const currentPage = computed(() => {
  const page = Number(route.query.page) || 1;
  store.setPage(page);
  return page;
});

const { data: allPosts } = await useAsyncData(
  "posts-total",
  (): Promise<Post[]> => store.fetchAllPosts()
);

const {
  data: paginatedPosts,
  pending,
  error,
} = await useAsyncData(
  "posts-paginated",
  (): Promise<Post[]> =>
    store.fetchPaginatedPosts(currentPage.value, store.limit),
  {
    watch: [currentPage],
  }
);

watchEffect(() => {
  if (allPosts.value) {
    store.setTotal(allPosts.value.length);
  }
  if (paginatedPosts.value) {
    store.setPosts(paginatedPosts.value);
    paginatedPosts.value.forEach((post) => {
      if (!postImages.value[post.id]) {
        const { randomImage } = useRandomImage(`post-${post.id}`);
        postImages.value[post.id] = randomImage.value;
      }
    });
  }
  store.setLoading(pending.value);
  store.setError(error.value?.message || null);
});

const totalPages = computed<number>(() => Math.ceil(store.total / store.limit));

const changePage = (newPage: number): void => {
  const router = useRouter();
  router.replace({
    query: { ...route.query, page: newPage },
  });
};

const visiblePages = computed<number[]>(() => {
  const current: number = currentPage.value;
  const total: number = totalPages.value;
  const delta: number = 2;

  let start: number = Math.max(1, current - delta);
  let end: number = Math.min(total, current + delta);

  if (current - delta < 1) {
    end = Math.min(total, end + (delta - current + 1));
  }

  if (current + delta > total) {
    start = Math.max(1, start - (current + delta - total));
  }

  const pages: number[] = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});

const nextPage = (): void => {
  if (currentPage.value < totalPages.value) {
    changePage(currentPage.value + 1);
  }
};
</script>

<template>
  <section class="max-w-[1400px] mx-auto px-8 py-16">
    <h1 class="text-[84px] mb-12">Articles</h1>
    <div v-if="store.loading" class="text-center py-20 text-gray-500">
      Loading...
    </div>
    <div v-else-if="store.error" class="text-center py-20 text-red-500">
      {{ store.error }}
    </div>
    <div v-else class="grid grid-cols-4 gap-8">
      <NuxtLink
        v-for="post in store.posts"
        :key="post.id"
        :to="`/articles/${post.id}`"
        class="flex flex-col gap-4group"
      >
        <ClientOnly>
          <NuxtImg
            :src="getPostImage(post.id)"
            class="w-full h-80 object-cover rounded-lg"
            :alt="post.title"
            loading="lazy"
          />
          <h2 class="font-medium text-lg">{{ post.title }}</h2>
        </ClientOnly>
      </NuxtLink>
    </div>

    <div class="flex justify-start items-center gap-2 mt-12">
      <button
        v-for="pageNumber in visiblePages"
        :key="pageNumber"
        class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
        :class="
          pageNumber === currentPage
            ? 'bg-black text-white border-black'
            : 'border-gray-400 hover:bg-gray-50'
        "
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </button>
      <button
        class="w-10 h-10 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        <img src="~/assets/icons/arrow-r.svg" alt="&rarr;" class="w-5 h-5" />
      </button>
    </div>
  </section>
</template>

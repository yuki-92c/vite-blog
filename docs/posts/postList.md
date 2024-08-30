---
theme: page
title: Blog Posts
next: false
prev: false
---


<script setup>
  import { data as posts } from "../.vitepress/theme/posts.data.ts"
</script>


# Blog Posts

<br/>

<ul>
  <li v-for="post of posts">
    <a :href="post.url" class="home-posts-article-title">{{post.frontmatter.title}}</a>
  </li>
</ul>

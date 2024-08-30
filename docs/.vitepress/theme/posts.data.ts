import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  transform(rawData) {
    // Remove the postList page from the list of posts
    const filteredData = rawData.filter((page) => page.url !== '/posts/postList.html' );

    const sortedData = filteredData.sort((a, b) => {
      // Sort posts by date
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    });

    return filteredData;
  }
})

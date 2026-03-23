module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("blogdate", (dateObj) => {
    const d = new Date(dateObj);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}.${m}.${day}`;
  });

  eleventyConfig.addFilter("seqformat", (num) => {
    return String(num).padStart(3, '0');
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_includes"
    }
  };
};

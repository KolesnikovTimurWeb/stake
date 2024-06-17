module.exports = {
   reactStrictMode: true,
   images: {
      domains: ["cdn.sanity.io", "mediumrare.imgix.net"],
      formats: ["image/webp"],
   },
   rules: [
      {
         test: /\.js$/,
         enforce: "pre",
         loader: "eslint-loader"
      }
   ]
}

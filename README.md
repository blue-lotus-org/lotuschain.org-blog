clean source of : [sol blog](https://sol-app.github.io/blog/)

# HOW TO CHANGE, USE
- fork this repo or : \
`npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/mosi-arch/blog-src"`

- **pages -> index.js** : 
- - change line **8, 9** to your blog name & description.
- - change content of line **40 to 79** to youre custom info.

- **pages -> resume.js** : this file hard coded. you would remove file or change content to your self data.

- **pages -> post -> [slug].js** : at line **47** change link `href="/blog"` to `href="/your-repo-name"` . if your repo name is `blog` then no need to change.

- look at `onst BLOG_TITLE = "SOL BLOG";` from: layout, slug, index, resume & change `sol blog` to your blog name.

- **posts** : look at `How-To-Change.md` -> make your blog by `markdown` like this and use it as post-blog.

## more
- more info at : *nextjs, tailwind css*

---

learn solidity [here](https://github.com/mosi-sol) \
learn web3 [here](https://github.com/sol-app) \
solidity blog [here](https://sol-app.github.io/blog)

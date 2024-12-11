---
seo:
  title: The git-based CMS for Nuxt projects.
  description: Nuxt Content is a module for Nuxt that provides a simple way to
    manage content for your application. It allows developers to write their
    content in Markdown, YAML, or JSON files and then query and display it in
    their application.
---

::u-page-hero
  :::div{.hidden.sm:block}
    ::::u-color-mode-image
    ---
    class: size-full absolute bottom-0 inset-x-4 z-[-1]
    dark: /home/hero-dark.svg
    light: /home/hero-light.svg
    ---
    ::::
  :::

#title{unwrap="p"}
[Studio]{.text-[var(--ui-primary)]}, the content edition :br for everyone.

#description
Studio brings visual editing to your Nuxt Content projects, developers control the setup while teams edit visually. With smart editors that adapt to markdown, YAML, or JSON, anyone can contribute to the website – no technical expertise needed. \*\_Built for developers, made for everyone.\_\*

#links{unwrap="p"}
  :::u-button
  ---
  label: Get Started for free
  size: xl
  target: _blank
  to: https://nuxt.studio/signin
  trailingIcon: i-lucide-arrow-right
  ---
  :::

  :::u-button
  ---
  color: neutral
  label: Read the documentation
  size: xl
  target: _blank
  to: /docs/studio/setup
  variant: subtle
  ---
  :::
::

::u-page-section
#features
  :::u-page-card
  ---
  inline: true
  icon: i-lucide-circle-user
  variant: naked
  ---
  #title{unwrap="p"}
  GitHub & Google Authentication
  
  #description{unwrap="p"}
  Personalized workspace for each role: developers, writers, and clients.
  :::

  :::u-page-card
  ---
  inline: true
  icon: i-lucide-file-pen
  variant: naked
  ---
  #title{unwrap="p"}
  Easy content updates
  
  #description{unwrap="p"}
  From Markdown to YAML edition, or visual editors are designed for non technical users.
  :::

  :::u-page-card
  ---
  inline: true
  icon: i-lucide-users
  variant: naked
  ---
  #title{unwrap="p"}
  Real-time Collaboration
  
  #description{unwrap="p"}
  Write as a team in real-time with our collaboration features.
  :::

  :::u-page-card
  ---
  inline: true
  icon: i-lucide-sparkles
  variant: naked
  ---
  #title{unwrap="p"}
  From Code to Edition
  
  #description{unwrap="p"}
  Developers build the foundation while writers can safely edit the content.
  :::

  :::u-page-card
  ---
  inline: true
  icon: i-lucide-panels-top-left
  variant: naked
  ---
  #title{unwrap="p"}
  Review before publishing
  
  #description{unwrap="p"}
  Review your changes before making them live on your website.
  :::

  :::u-page-card
  ---
  inline: true
  icon: i-lucide-mouse-pointer-click
  variant: naked
  ---
  #title{unwrap="p"}
  Ready-to-use Templates
  
  #description{unwrap="p"}
  Get started quickly with pre-built templates for Saas sites, blogs, docs and more.
  :::
::

::u-page-section
---
orientation: horizontal
---
  :::code-group
  ```vue [components/content/HomeFeature.vue]
  <template>
    <div class="flex items-start gap-3">
      <div class="flex items-center justify-center border rounded-lg p-1.5">
        <UIcon :name="icon" />
      </div>
      <div class="flex flex-col">
        <h3 class="font-semibold">
          <ContentSlot name="title" />
        </h3>
        <span>
          <ContentSlot name="description" />
        </span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    icon: {
      type: String,
      default: 'i-ph-cursor-click',
    },
  })
  </script>
  ```
  
  ```mdc [content/index.md]
  ::home-feature
    ---
    icon: i-mdi-vuejs
    ---
    #title
    Embedded Vue components
    #description
    Edit slots and props inside the Notion-like editor.
  ::
  ```
  
    ::::preview-card{icon="i-lucide-eye" label="Editor"}
    ![vue component edition on Studio](/docs/studio/home-content-studio-dark.webp)
    ::::
  :::

#title{unwrap="p"}
Developers create the [editing experience]{.text-[var(--ui-primary)]}

#description
Developers build the foundation their way: custom components, media library, and site configuration.

#features
  :::u-page-card
  ---
  inline: true
  icon: i-lucide-settings-2
  variant: naked
  ---
  #title{unwrap="p"}
  Customizable and editable Vue components
  :::

  :::u-page-card
  ---
  inline: true
  icon: i-lucide-brush
  variant: naked
  ---
  #title{unwrap="p"}
  Edit your app.config visually
  :::

  :::u-page-card
  ---
  inline: true
  icon: i-simple-icons-markdown
  variant: naked
  ---
  #title{unwrap="p"}
  Edit your Markdown with our visual editor
  :::

#links
  :::u-button
  ---
  color: neutral
  label: Learn more about custom components
  to: /docs/files/markdown#vue-components
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  :::
::

::u-page-section
---
orientation: horizontal
---
:video{autoplay controls loop poster="/assets/home/videos/HomeNotionLikePoster.webp" src="https://res.cloudinary.com/nuxt/video/upload/v1733494722/contentv3final_rc8bvu.mp4"}

#title{unwrap="p"}
Let [anyone edit]{.text-[var(--ui-primary)]} your Nuxt Content website

#description
Teams and clients get a powerful visual editor for content management, with real-time collaboration and draft systems - all without touching code.

#features
  :::u-page-card
  ---
  inline: true
  icon: i-lucide-layout-grid
  variant: naked
  ---
  #title{unwrap="p"}
  Create collections for similar content files
  :::

  :::u-page-card
  ---
  inline: true
  icon: i-lucide-circle-check
  variant: naked
  ---
  #title{unwrap="p"}
  Define schema for the collection front matter
  :::

  :::u-page-card
  ---
  inline: true
  icon: i-lucide-text-cursor
  variant: naked
  ---
  #title{unwrap="p"}
  Get auto-completion in your Vue files
  :::

#links
  :::u-button
  ---
  color: neutral
  label: Learn more about content collections
  to: /docs/collections/collections
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  :::
::

::u-page-section
---
reverse: true
orientation: horizontal
---
  :::u-color-mode-image
  ---
  class: size-full
  dark: /home/pro-dark.svg
  light: /home/pro-light.svg
  ---
  :::

#title
Make changes [without technical skills]{.text-[var(--ui-primary)]}

#description
Edit your Nuxt Content website with **Studio**, our CMS platform with Notion-like Markdown editors and generated forms for `YAML` and `JSON` files. Live preview and online collaboration included.

#features
  :::u-page-card
  ---
  inline: true
  icon: i-simple-icons-github
  variant: naked
  ---
  #title{unwrap="p"}
  Commit & push to GitHub with one click
  :::

  :::u-page-card
  ---
  inline: true
  icon: i-simple-icons-google
  variant: naked
  ---
  #title{unwrap="p"}
  Invite editors to login with Google and let them publish their changes
  :::

  :::u-page-card
  ---
  inline: true
  icon: i-lucide-users
  variant: naked
  ---
  #title{unwrap="p"}
  Edit the content in real-time with your team
  :::

#links
  :::u-button
  ---
  color: neutral
  label: Discover Studio
  to: https://nuxt.studio
  trailingIcon: i-lucide-arrow-right
  ---
  :::
::

::u-page-section
  :::div{.hidden.sm:block}
    ::::u-color-mode-image
    ---
    class: size-full absolute bottom-0 inset-x-4 z-[-1]
    dark: /home/cta-dark.svg
    light: /home/cta-light.svg
    ---
    ::::
  :::

#title
Add a git-based CMS to your Nuxt project.

#links
  :::u-button
  ---
  label: Start reading docs
  to: /docs/getting-started/installation
  trailingIcon: i-lucide-arrow-right
  ---
  :::

  :::u-button
  ---
  color: neutral
  label: Open Studio
  target: _blank
  to: https://nuxt.studio
  variant: outline
  ---
  :::
::

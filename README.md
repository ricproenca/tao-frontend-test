# TAO Frontend Specialist Test

https://www.youtube.com/watch?v=ZZncFax8yNY

## Helpers

- [HTML5 Tutorial](http://tutorials.jenkov.com/html5/index.html)
- [You might not need jquery](http://youmightnotneedjquery.com)

## Accessibility

- Add Text Alternative to Images `alt` for Visually Impaired Accessibility
- Headings `h1,h2,...` to Show Hierarchical Relationships of Content
- Content Using the `main` Element
- Wrap content with `article` Element
- Make screen reader navigation easier with `header`, `nav` and `footer`
- Improve visual representation with `figure` and `figcaption`
- Improve form fields with `label`
- Wrap Radio Buttons with `fieldset` and `legend`
- Accessible Date Picker `<input type="date">`
- Standardize Times `<time datetime="2013-02-13">last Wednesday</time>`
- Make some elements only visible to a screen reader using CSS `.sr-only`
- Use high contrast background/text and avoid colorblindness issues
- Make links navigatable with "Access Keys" `<button accesskey="b">Click Me!</button>`
- Specify the order of focus with `tabindex`

## Responsive Web Design Principles

- Fluid Grid Systems
- Media Queries
- Fluid Images
  - Make the images responsive using CSS `img`
  - Optimize images defining it's `width` and `height`

## Performance

- Resource prefetching
  - Using `preload` for resources that will be used.
  - Using `prefetch` for resources likely to be used.
- Optimize Code
  - Only load whatever is needed
  - Avoid blocking main thread ( minimize compile, parse and execution time )
  - Avoid memory leaks ( remove listeners )
  - Avoid multiple re-rendering ( avoid DOM manipulation )
- Network delivery
  - Less files
  - Compress text (js, css, html)
    - webpack
    - minifiers
    - uglifiers
  - Minimize images
    - compress
    - image size, quality, metadata
    - use CDN

## Progressive Web App

- HTTPS
- App Manifest
- Service Worker (cache files to work offline)

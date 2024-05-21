import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
 
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tippy.js/6.3.7/tippy.min.css"
        />
         <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tippy.js/6.3.7/tippy.min.css"
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <Script
          src="https://example.com/script.js"
          strategy="beforeInteractive"
        />
         <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <script src="https://unpkg.com/alpinejs"></script>
        <script
          src="https://unpkg.com/@ryangjchandler/alpine-tooltip@1.2.0/dist/cdn.min.js"
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>

        <script src="https://unpkg.com/alpinejs"></script>

       
        <script
          src="https://unpkg.com/@ryangjchandler/alpine-tooltip@1.2.0/dist/cdn.min.js"
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
      </body>
    </Html>
  )
}
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "tailwindcss/tailwind.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VNR Educational Services",
  description:
    "Established with a passion for empowering students to reach their full potential, we are dedicated to providing comprehensive consultancy services tailored to the unique needs of undergraduate students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
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
        <script>
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '812381330474271');
fbq('track', 'PageView');`}
        </script>
        <noscript>
          <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=812381330474271&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />

        <a
          href="https://api.whatsapp.com/send?phone=+919505502299"
          className="float lg:hidden"
          target="_blank"
        >
          <i class="fa fa-whatsapp my-float"></i>
        </a>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </body>
    </html>
  );
}

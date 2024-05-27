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


import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  metadataBase: new URL("https://YOUR-DOMAIN.com"),
  title: {
    default: "Sati Travels Ltd | Explore Beyond Limits",
    template: "%s | Sati Travels",
  },
  description:
    "Explore destinations and plan your next journey with Sati Travels Ltd.",
  openGraph: {
    title: "Sati Travels Ltd | Explore Beyond Limits",
    description:
      "Discover travel opportunities and plan your next journey.",
    url: "https://YOUR-DOMAIN.com",
    siteName: "Sati Travels Ltd",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

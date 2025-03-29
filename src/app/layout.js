import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mind & Mood Scanner",
  description: "Quick emotional wellbeing check-in",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-gray-50 text-gray-800`}
      >
        <div className={`${lora.className}`}>{children}</div>
      </body>
    </html>
  );
}

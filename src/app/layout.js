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
  title: "Escáner de Mente y Ánimo",
  description: "Evaluación rápida de tu bienestar emocional",
  openGraph: {
    title: "Escáner de Mente y Ánimo",
    description: "Evaluación rápida de tu bienestar emocional",
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Escáner de Mente y Ánimo",
    description: "Evaluación rápida de tu bienestar emocional",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} antialiased bg-gray-50 text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Darker_Grotesque, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sanskrati — Product Designer",
  description:
    "Portfolio of Sanskrati, an engineer turned product designer crafting interfaces that solve real business goals and make users smile.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${darkerGrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

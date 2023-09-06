import Navbar from "./components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import MyProfilePic from "./components/MyProfilePic";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800 dark:text-white text-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}

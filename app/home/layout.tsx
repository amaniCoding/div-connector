import type { Metadata } from "next";
import NavBar from "../ui/home/nav-bar";
export const metadata: Metadata = {
  title: "Profile",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}

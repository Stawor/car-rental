import "./globals.css";
import Nav from "./components/Navbar";

export const metadata = {
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
      <body className=" bg-slate-200">
        <Nav />
        {children}
      </body>
    </html>
  );
}

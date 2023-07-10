import ClientOnly from "./components/ClicentOnly";
import RegisterModel from "./components/models/RegisterModel";
import LoginModel from "./components/models/LoginModel";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wanderers Retreat",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModel />
          <RegisterModel />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}

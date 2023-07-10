import ClientOnly from "./components/ClicentOnly";
import LoginModel from '.
import RegisterModel from '@/app/components/modals/RegisterModal';
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ToasterProvider from '@/app/providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';


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

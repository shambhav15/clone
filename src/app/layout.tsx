import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Provider from "../../utils/providers";
import SideBar from "@/components/SideBar";
import RightFeed from "@/components/RightFeed";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Twitter",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleOAuthProvider clientId="369157823517-mhs55febvsafoe97v1n82aprts2f1a13.apps.googleusercontent.com">
      <html lang="en">
        <body className={inter.className}>
          <Provider>
            <div className="grid grid-cols-12  h-screen w-screen sm:px-56">
              <SideBar />
              {children}
              <RightFeed />
            </div>
          </Provider>
          <Toaster position="bottom-right" />
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}

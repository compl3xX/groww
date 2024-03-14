import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/context/Context";
import { Provider } from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Groww",
  description: "Grow SDE-INTERN",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ContextProvider>{children}</ContextProvider>
        </Provider>
      </body>
    </html>
  );
}

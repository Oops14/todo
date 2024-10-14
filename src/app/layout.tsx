import type { Metadata } from "next";

import Container from "@/shared/conteiner/Container";

import "../assets/styles/globals.scss";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}

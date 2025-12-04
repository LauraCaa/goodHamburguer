import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Proyecto",
  description: "Descripción de mi proyecto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}



import "./globals.css";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-black h-screen flex flex-col'>
        {
          children
        }

      </body>
    </html>
  );
}

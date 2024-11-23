import AuthNavbar from "@/components/pages/auth/auth.navbar";
import { ThemeProvider } from "@/components/providers/themes";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`p-5`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthNavbar />
          <main className="flex items-center justify-center h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

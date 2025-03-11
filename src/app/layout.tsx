import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import NavBar from "./_components/NavBar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <ThemeProvider theme={theme} defaultMode="light">
            <CssBaseline />
            <NavBar/>
            {children}
          </ThemeProvider>

      </body>
    </html>
  );
}

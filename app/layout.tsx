import "./globals.css";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Ficus Ceramica",
  description: "Porcelain slipcasting workshop in New Orleans."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container">
            <Nav />
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import AuthProviders from "@/components/AuthProviders";

export const metadata = {
  title: "Παιδαγωγικό Κέντρο",
  description: "CRM-ERP για Παιδαγωγικά Κέντρα",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

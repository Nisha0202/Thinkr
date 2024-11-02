import Navbar from "@/component/Navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <main>
        <Navbar/>
         {children}
     </main>

    );
  }
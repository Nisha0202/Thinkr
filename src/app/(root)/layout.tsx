import Navbar from "@/app/component/Navbar";

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
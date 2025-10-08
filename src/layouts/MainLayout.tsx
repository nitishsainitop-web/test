import Header from "../components/Header";
import Footer from "../components/Footer";
import type { ReactNode } from "react";
import Header2 from "../components/Header2";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Header2 />
            <main className="flex-grow bg-gray-50 p-6">{children}</main>
            <Footer />

        </div>
    );
}

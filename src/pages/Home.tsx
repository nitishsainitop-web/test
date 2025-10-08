import BusinessCards from "../BusinessCard/BusinessCards";
import BusinessLinks from "../BusinessLink/BusinessLinks";
import LogoMarquee from "../Clientlogos/LogoMarquee";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
    return (
        <MainLayout>
            <LogoMarquee/>
            <BusinessCards />
            <BusinessLinks />
        </MainLayout>
    );
}

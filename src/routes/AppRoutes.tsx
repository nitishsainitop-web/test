import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "~react-pages";
import Header from "../components/Header";
import Footer from "../components/Footer";


const RoutesWrapper = () => {
  const element = useRoutes(routes);
  return (
    <>
      <Header />
      <main className="min-h-[90vh]">{element}</main>
      <Footer />
    </>
  );
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <RoutesWrapper />
    </BrowserRouter>
  );
}

import { useState } from "react";
import { Header } from "./components/Header";
import { PageRouter } from "./components/PageRouter";
import { Footer } from "./components/Footer";

export default function App () {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <PageRouter currentPage={currentPage} onNavigate={handleNavigation} />
      <Footer />
    </div>
  );
}
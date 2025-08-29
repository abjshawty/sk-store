import { HomePage } from "./HomePage";
import { MensPage } from "./MensPage";
import { WomensPage } from "./WomensPage";
import { PlaceholderPage } from "./PlaceholderPage";

interface PageRouterProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function PageRouter({ currentPage, onNavigate }: PageRouterProps) {
  switch (currentPage) {
    case 'home':
      return <HomePage onNavigate={onNavigate} />;
    case 'men':
      return <MensPage />;
    case 'women':
      return <WomensPage />;
    case 'accessories':
      return <PlaceholderPage title="Accessories" />;
    case 'collections':
      return <PlaceholderPage title="Collections" />;
    case 'editorial':
      return <PlaceholderPage title="Editorial" />;
    default:
      return <HomePage onNavigate={onNavigate} />;
  }
}
import { HomePage } from "./HomePage";
import { MensPage } from "./MensPage";
import { WomensPage } from "./WomensPage";
import { AccessoriesPage } from "./AccessoriesPage";
import { CollectionsPage } from "./CollectionsPage";
import { EditorialPage } from "./EditorialPage";
import { ProfilePage } from "./ProfilePage";
import { WishlistPage } from "./WishlistPage";
import { BagPage } from "./BagPage";

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
      return <AccessoriesPage />;
    case 'collections':
      return <CollectionsPage />;
    case 'editorial':
      return <EditorialPage />;
    case 'profile':
      return <ProfilePage />;
    case 'wishlist':
      return <WishlistPage />;
    case 'bag':
      return <BagPage />;
    default:
      return <HomePage onNavigate={onNavigate} />;
  }
}
import { useState } from "react";
import { 
  User, 
  Settings, 
  Package, 
  MapPin, 
  Heart, 
  CreditCard, 
  Shield, 
  Bell, 
  Edit3,
  ChevronRight,
  Eye,
  Truck,
  CheckCircle,
  Clock
} from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

// Mock user data
const userData = {
  name: "Alexandra Chen",
  email: "alexandra.chen@email.com",
  phone: "+1 (555) 123-4567",
  memberSince: "March 2023",
  avatar: "https://images.unsplash.com/photo-1737623473152-a694b3da8328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwcHJvZmlsZXxlbnwxfHx8fDE3NTY0OTc1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  tier: "Premium Member",
  points: 2845
};

// Mock order data
const orders = [
  {
    id: "LX-24-0089",
    date: "August 25, 2025",
    status: "Delivered",
    total: "$1,245.00",
    items: 3,
    trackingNumber: "1Z999AA1012345675",
    estimatedDelivery: "August 26, 2025",
    image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYW5kYmFnfGVufDF8fHx8MTc1NjM5MDk0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "LX-24-0076",
    date: "August 18, 2025",
    status: "In Transit",
    total: "$895.00",
    items: 2,
    trackingNumber: "1Z999AA1012345676",
    estimatedDelivery: "August 28, 2025",
    image: "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG9lc3xlbnwxfHx8fDE3NTY0OTc1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "LX-24-0063",
    date: "August 10, 2025",
    status: "Processing",
    total: "$1,580.00",
    items: 4,
    trackingNumber: "Pending",
    estimatedDelivery: "August 30, 2025",
    image: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZHJlc3N8ZW58MXx8fHwxNzU2NDk3NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

// Mock addresses
const addresses = [
  {
    id: "1",
    type: "Home",
    name: "Alexandra Chen",
    address: "142 West 57th Street",
    city: "New York",
    state: "NY",
    zip: "10019",
    country: "United States",
    isDefault: true
  },
  {
    id: "2",
    type: "Office",
    name: "Alexandra Chen",
    address: "350 5th Avenue",
    city: "New York",
    state: "NY",
    zip: "10118",
    country: "United States",
    isDefault: false
  }
];

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [editingProfile, setEditingProfile] = useState(false);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "In Transit":
        return <Truck className="h-4 w-4 text-blue-500" />;
      case "Processing":
        return <Clock className="h-4 w-4 text-orange-500" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "In Transit":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Processing":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span>Home</span>
            <span>/</span>
            <span>Profile</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <ImageWithFallback
                src={userData.avatar}
                alt={userData.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl lg:text-3xl tracking-tight">{userData.name}</h1>
              <div className="flex items-center gap-4">
                <Badge variant="secondary">{userData.tier}</Badge>
                <span className="text-sm text-muted-foreground">
                  Member since {userData.memberSince}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                {userData.points} reward points available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span className="hidden sm:inline">Orders</span>
              </TabsTrigger>
              <TabsTrigger value="addresses" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden sm:inline">Addresses</span>
              </TabsTrigger>
              <TabsTrigger value="payment" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="hidden sm:inline">Payment</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Account Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Account Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Total Orders</span>
                        <span className="text-sm">24</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Total Spent</span>
                        <span className="text-sm">$12,450</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Reward Points</span>
                        <span className="text-sm">{userData.points}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Wishlist Items</span>
                        <span className="text-sm">8</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Orders */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Recent Orders
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {orders.slice(0, 2).map((order) => (
                      <div key={order.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-12 h-12 rounded-lg overflow-hidden">
                          <ImageWithFallback
                            src={order.image}
                            alt={`Order ${order.id}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(order.status)}
                            <span className="text-sm">{order.id}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">{order.total}</p>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" size="sm" className="w-full">
                      View All Orders
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Heart className="h-4 w-4 mr-2" />
                      View Wishlist
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Package className="h-4 w-4 mr-2" />
                      Track Orders
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      Manage Addresses
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Payment Methods
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl tracking-tight">Order History</h2>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Track All Orders
                </Button>
              </div>

              <div className="space-y-4">
                {orders.map((order) => (
                  <Card key={order.id}>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-4 gap-6 items-center">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-lg overflow-hidden">
                            <ImageWithFallback
                              src={order.image}
                              alt={`Order ${order.id}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{order.id}</h3>
                            <p className="text-sm text-muted-foreground">
                              {order.items} {order.items === 1 ? 'item' : 'items'}
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm text-muted-foreground">Order Date</p>
                          <p className="text-sm">{order.date}</p>
                        </div>

                        <div>
                          <p className="text-sm text-muted-foreground">Status</p>
                          <div className="flex items-center gap-2 mt-1">
                            {getStatusIcon(order.status)}
                            <Badge variant="secondary" className={getStatusColor(order.status)}>
                              {order.status}
                            </Badge>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Total</p>
                          <p className="font-medium">{order.total}</p>
                          <div className="flex gap-2 mt-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            {order.status === "In Transit" && (
                              <Button variant="outline" size="sm">
                                Track
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Addresses Tab */}
            <TabsContent value="addresses" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl tracking-tight">Saved Addresses</h2>
                <Button>
                  <MapPin className="h-4 w-4 mr-2" />
                  Add New Address
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {addresses.map((address) => (
                  <Card key={address.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{address.type}</h3>
                          {address.isDefault && (
                            <Badge variant="secondary">Default</Badge>
                          )}
                        </div>
                        <Button variant="ghost" size="sm">
                          <Edit3 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p className="text-foreground">{address.name}</p>
                        <p>{address.address}</p>
                        <p>{address.city}, {address.state} {address.zip}</p>
                        <p>{address.country}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Payment Tab */}
            <TabsContent value="payment" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl tracking-tight">Payment Methods</h2>
                <Button>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs">****</span>
                      </div>
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 12/27</p>
                      </div>
                      <Badge variant="secondary">Default</Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit3 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
                        <span className="text-white text-xs">****</span>
                      </div>
                      <div>
                        <p className="font-medium">•••• •••• •••• 8888</p>
                        <p className="text-sm text-muted-foreground">Expires 09/26</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit3 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <h2 className="text-xl tracking-tight">Account Settings</h2>

              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Personal Information
                    <Button variant="outline" size="sm" onClick={() => setEditingProfile(!editingProfile)}>
                      <Edit3 className="h-4 w-4 mr-2" />
                      {editingProfile ? 'Save' : 'Edit'}
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input 
                        defaultValue={userData.name} 
                        disabled={!editingProfile}
                        className={!editingProfile ? "bg-muted" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input 
                        defaultValue={userData.email} 
                        disabled={!editingProfile}
                        className={!editingProfile ? "bg-muted" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone</Label>
                      <Input 
                        defaultValue={userData.phone} 
                        disabled={!editingProfile}
                        className={!editingProfile ? "bg-muted" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Member Since</Label>
                      <Input 
                        defaultValue={userData.memberSince} 
                        disabled
                        className="bg-muted"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Order Updates</p>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications about your orders
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Collections</p>
                      <p className="text-sm text-muted-foreground">
                        Be notified when new collections arrive
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Emails</p>
                      <p className="text-sm text-muted-foreground">
                        Receive promotional offers and updates
                      </p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>

              {/* Security */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Security & Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-between">
                    Change Password
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    Two-Factor Authentication
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    Privacy Settings
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Separator />
                  <Button variant="outline" className="w-full text-destructive hover:text-destructive">
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
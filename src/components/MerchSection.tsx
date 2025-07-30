"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, ShoppingBag, Shirt, Coffee, Disc3 } from 'lucide-react';

const merchItems = [
  {
    id: 1,
    name: "Humble Band T-Shirt",
    price: "$25",
    image: "shirt",
    icon: Shirt,
    description: "Premium quality cotton t-shirt with band logo"
  },
  {
    id: 2,
    name: "Limited Edition Vinyl",
    price: "$35",
    image: "vinyl",
    icon: Disc3,
    description: "Collector's edition vinyl of our latest album"
  },
  {
    id: 3,
    name: "Coffee Mug",
    price: "$15",
    image: "mug",
    icon: Coffee,
    description: "Start your day with Humble Band vibes"
  },
  {
    id: 4,
    name: "Band Hoodie",
    price: "$45",
    image: "hoodie",
    icon: Shirt,
    description: "Comfortable hoodie perfect for concerts"
  }
];

export default function MerchSection() {
  const handleMerchClick = () => {
    // This would redirect to the external merch store
    window.open('https://humbleband-merch.com', '_blank');
  };

  return (
    <section id="merch" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Official <span className="text-orange-500">Merchandise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Show your support with official Humble Band gear. High-quality merchandise for true fans.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg group"
            onClick={handleMerchClick}
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Visit Our Store
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {merchItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.id} className="bg-gray-800 border-gray-700 group hover:border-orange-500 transition-all duration-300 hover:scale-105 cursor-pointer" onClick={handleMerchClick}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="relative">
                      <IconComponent className="h-16 w-16 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 h-16 w-16 bg-orange-500 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  <p className="text-2xl font-bold text-orange-500 mb-4">{item.price}</p>
                  <Button 
                    className="w-full bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMerchClick();
                    }}
                  >
                    Buy Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">New items added regularly. Free shipping on orders over $50!</p>
        </div>
      </div>
    </section>
  );
}
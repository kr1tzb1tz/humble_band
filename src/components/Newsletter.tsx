'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Send, Music, Star, Users } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  const benefits = [
    {
      icon: Music,
      title: "Exclusive Content",
      description: "Get early access to new songs and behind-the-scenes content"
    },
    {
      icon: Star,
      title: "VIP Access",
      description: "Priority access to tickets and special events"
    },
    {
      icon: Users,
      title: "Fan Community",
      description: "Connect with other fans and join exclusive discussions"
    }
  ];

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Mail className="h-16 w-16 text-orange-500" />
                <div className="absolute inset-0 h-16 w-16 bg-orange-500 rounded-full blur-xl opacity-20"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join Our <span className="text-orange-500">Newsletter</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay in the loop with exclusive updates, new releases, and special offers. 
              Be the first to know about everything Humble Band.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Newsletter Form */}
          <Card className="max-w-2xl mx-auto shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Subscribe Now</h3>
                  <p className="text-gray-600">Join over 10,000 fans already subscribed</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 text-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      disabled={isLoading}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-orange-500 hover:bg-orange-600 h-12 px-8 group"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        Subscribe
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  We respect your privacy. Unsubscribe at any time. No spam, we promise!
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Social Proof */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Trusted by thousands of music lovers worldwide</p>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span className="font-semibold">10,000+ Subscribers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
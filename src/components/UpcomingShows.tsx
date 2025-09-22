import { Calendar, MapPin, Clock, Music, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Show {
  date: string;
  venue: string;
  location: string;
  address: string;
  time: string;
  details: string;
  additionalInfo?: string;
  icon: React.ReactNode;
}

const upcomingShows: Show[] = [
  {
    date: 'September 12th',
    venue: 'GearHouse Brewing Co.',
    location: 'Chambersburg, PA',
    address: 'Chambersburg, PA',
    time: '7-9:30 PM',
    details: 'Free Show',
    icon: <Music className="h-5 w-5" />
  },
  {
    date: 'October 3rd',
    venue: 'Sleepy Creek Fall Fest',
    location: 'Sleepy Creek, WV',
    address: 'Sleepy Creek, WV',
    time: '7:30-9 PM showtime',
    details: 'With the Ferd Band and Dirty Grass Players',
    additionalInfo: 'Our funky drummer Nugget will be the artist at large for the weekend, sitting in with different acts!',
    icon: <Music className="h-5 w-5" />
  },
  {
    date: 'November 14th',
    venue: 'Relax Lounge @ the Orchards',
    location: 'Chambersburg, PA',
    address: 'Chambersburg, PA',
    time: '8 PM Start. 2 Sets',
    details: 'Free Show',
    icon: <Music className="h-5 w-5" />
  },
  {
    date: 'November 15th',
    venue: 'With Larry Keel',
    location: 'Winchester, VA',
    address: 'Winchester, VA',
    time: 'Private event',
    details: '',
    icon: <Music className="h-5 w-5" />
  }
];

export default function UpcomingShows() {
  const getGoogleMapsUrl = (address: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  const formatDate = (date: string) => {
    return `${date}, 2025`;
  };

  return (
    <section id="upcoming-shows" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Shows
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Catch us live on stage. Join the energy, feel the music.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {upcomingShows.map((show, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl md:text-3xl font-semibold text-gray-900">
                    {formatDate(show.date)}
                  </CardTitle>
                  <div className="text-orange-500">
                    {show.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 text-lg">{show.venue}</h3>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="text-lg font-medium">{show.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-gray-500 flex-shrink-0" />
                    <p className="text-gray-700">{show.time}</p>
                  </div>
                </div>
                

                
                {show.details && (
                  <div className="pt-1">
                    <p className="text-sm text-orange-600 font-medium">{show.details}</p>
                  </div>
                )}
                
                {show.additionalInfo && (
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-sm text-purple-500 italic">{show.additionalInfo}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-orange-100 px-6 py-3 rounded-full">
            <span className="text-orange-800 font-medium">Booking & info:</span>
            <a 
              href="mailto:bwgorby@gmail.com" 
              className="text-orange-600 hover:text-orange-800 font-semibold transition-colors"
            >
              bwgorby@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 
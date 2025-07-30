import { Calendar, MapPin, Clock, Music, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const tourDates = [
  {
    date: 'September 12th, 2025',
    venue: 'GearHouse Brewing Co.',
    location: 'Chambersburg, Pa',
    address: 'Chambersburg, PA',
    time: '7-9:30 PM',
    details: 'Free Show',
    icon: <Music className="h-5 w-5" />
  },
  {
    date: 'October 3rd, 2025',
    venue: 'Sleepy Creek Fall Fest',
    location: 'Sleepy Creek, Wv',
    address: 'Sleepy Creek, WV',
    time: '3-4 PM',
    details: 'More info TBA',
    icon: <Music className="h-5 w-5" />
  },
  {
    date: 'November 14th',
    venue: 'Relax Lounge @ the Orchards',
    location: 'Chambersburg, Pa',
    address: 'Chambersburg, PA',
    time: '8 PM Start. 2 Sets',
    details: 'Free Show',
    icon: <Music className="h-5 w-5" />
  },
  {
    date: 'November 15th',
    venue: 'With Larry Keel',
    location: 'Winchester, Va',
    address: 'Winchester, VA',
    time: 'Private event',
    details: '',
    icon: <Music className="h-5 w-5" />
  }
];

export default function TourDates() {
  const getGoogleMapsUrl = (address: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  return (
    <section id="dates" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tour Dates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Catch us live on stage. Join the energy, feel the music.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {tourDates.map((show, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {show.date}
                  </CardTitle>
                  <div className="text-orange-500">
                    {show.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 text-lg">{show.venue}</h3>
                  <a 
                    href={getGoogleMapsUrl(show.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors group"
                  >
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="group-hover:underline">{show.location}</span>
                    <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100" />
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <p className="text-gray-700">{show.time}</p>
                </div>
                
                {show.details && (
                  <div className="pt-1">
                    <p className="text-sm text-orange-600 font-medium">{show.details}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Follow us on social media for updates and additional shows
          </p>
        </div>
      </div>
    </section>
  );
}
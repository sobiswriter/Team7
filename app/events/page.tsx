"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Calendar, MapPin, Users, Clock, Star, ExternalLink } from 'lucide-react';

// Team7 events showcase
const teamEvents = [
  {
    id: 1,
    title: "Team7 HackFest 2024",
    description: "48-hour intensive hackathon focused on AI and machine learning solutions for real-world problems. Build innovative projects, network with industry experts, and compete for exciting prizes.",
    event_type: "hackathon",
    date: "2024-04-15",
    time: "09:00 AM",
    location: "LPU Campus, Block-34",
    max_participants: 150,
    registered_count: 127,
    status: "completed",
    is_featured: true
  },
  {
    id: 2,
    title: "Winter Code Jam 2024",
    description: "Annual coding hackathon bringing together the best programming minds. 24-hour challenge to develop web applications using modern frameworks and technologies.",
    event_type: "hackathon", 
    date: "2024-12-20",
    time: "10:00 AM",
    location: "LPU Campus, Block-32",
    max_participants: 100,
    registered_count: 89,
    status: "upcoming",
    is_featured: true
  },
  {
    id: 3,
    title: "Future of AI: Group Discussion",
    description: "Interactive group discussion exploring the impact of artificial intelligence on various industries, ethical considerations, and future career opportunities in AI.",
    event_type: "discussion",
    date: "2024-05-10", 
    time: "02:00 PM",
    location: "Seminar Hall, Block-30",
    max_participants: 50,
    registered_count: 42,
    status: "completed",
    is_featured: false
  },
  {
    id: 4,
    title: "Tech Industry vs Academia Debate",
    description: "Structured debate session discussing the pros and cons of pursuing careers in tech industry versus academic research. Industry professionals vs academic researchers.",
    event_type: "debate",
    date: "2024-08-25",
    time: "03:30 PM", 
    location: "Conference Room, Block-31",
    max_participants: 40,
    registered_count: 35,
    status: "completed",
    is_featured: false
  },
  {
    id: 5,
    title: "Open Source vs Proprietary Software Discussion",
    description: "Group discussion examining the benefits and challenges of open source software development versus proprietary solutions in modern software engineering.",
    event_type: "discussion",
    date: "2024-11-08",
    time: "04:00 PM",
    location: "Discussion Room, Block-33", 
    max_participants: 30,
    registered_count: 28,
    status: "upcoming",
    is_featured: false
  }
];

const eventTypeColors: { [key: string]: string } = {
  'workshop': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'hackathon': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'meetup': 'bg-green-500/20 text-green-400 border-green-500/30',
  'conference': 'bg-red-500/20 text-red-400 border-red-500/30',
  'social': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
};

export default function EventsPage() {
  const [filteredEvents, setFilteredEvents] = useState(teamEvents);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    filterEvents();
  }, [searchTerm, selectedType, showPastEvents]);

  const filterEvents = () => {
    let filtered = teamEvents;

    // Filter by past/future events
    if (!showPastEvents) {
      filtered = filtered.filter(event => event.status === 'upcoming');
    }

    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      filtered = filtered.filter(event => event.event_type === selectedType);
    }

    setFilteredEvents(filtered);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      time: date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };
  };

  const isEventPast = (dateString: string) => {
    return new Date(dateString) < new Date();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-team7-darkBg pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2 mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-team7-darkBg pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            <span className="bg-gradient-to-r from-team7-blue to-team7-magenta bg-clip-text text-transparent">
              Events & Activities
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for workshops, hackathons, meetups, and more exciting events
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-400"
              />
            </div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
            >
              <option value="">All Types</option>
              <option value="workshop" className="bg-gray-800">Workshop</option>
              <option value="hackathon" className="bg-gray-800">Hackathon</option>
              <option value="meetup" className="bg-gray-800">Meetup</option>
              <option value="conference" className="bg-gray-800">Conference</option>
              <option value="social" className="bg-gray-800">Social</option>
            </select>
            <Button
              variant={showPastEvents ? "default" : "outline"}
              onClick={() => setShowPastEvents(!showPastEvents)}
              className={showPastEvents ? "team7-gradient" : "border-white/20 text-white hover:bg-white/10"}
            >
              {showPastEvents ? "Show Upcoming" : "Show Past Events"}
            </Button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const { date, time } = formatDate(event.date);
            const isPast = event.status === 'completed';
            
            return (
              <Card key={event.id} className={`glass-effect border-white/10 hover:border-team7-blue/50 transition-all duration-300 group ${isPast ? 'opacity-75' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-white group-hover:text-team7-blue transition-colors duration-300 flex items-center gap-2">
                        {event.title}
                        {event.is_featured && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                        {isPast && <Badge variant="secondary" className="bg-gray-600 text-gray-300 text-xs">Past</Badge>}
                      </CardTitle>
                      <CardDescription className="text-gray-400 mt-2">
                        {event.description}
                      </CardDescription>
                    </div>
                    <Badge className={`${eventTypeColors[event.event_type]} border`}>
                      {event.event_type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Date & Time */}
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                    <Calendar className="w-4 h-4 text-team7-blue" />
                    <span>{date}</span>
                    <Clock className="w-4 h-4 text-team7-blue ml-2" />
                    <span>{time}</span>
                  </div>

                  {/* Location */}
                  {event.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                      <MapPin className="w-4 h-4 text-team7-blue" />
                      <span>{event.location}</span>
                    </div>
                  )}

                  {/* Participants */}
                  {event.max_participants && (
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
                      <Users className="w-4 h-4 text-team7-blue" />
                      <span>Max {event.max_participants} participants</span>
                    </div>
                  )}

                  {/* Organizer */}
                  <div className="text-sm text-gray-400 mb-4">
                    Organized by Team7
                  </div>

                  {/* Action Button */}
                  <Button
                    className={`w-full ${isPast 
                      ? 'bg-gray-600 hover:bg-gray-700 text-gray-300' 
                      : 'team7-gradient hover:opacity-90'
                    }`}
                    disabled={isPast}
                  >
                    {isPast ? 'Event Ended' : 'Register Now'}
                    {!isPast && <ExternalLink className="w-4 h-4 ml-2" />}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredEvents.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">
              {showPastEvents ? 'No past events found' : 'No upcoming events found'}
            </div>
            <p className="text-gray-500">
              {showPastEvents 
                ? 'Try adjusting your search criteria or check upcoming events' 
                : 'Stay tuned for exciting upcoming events!'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
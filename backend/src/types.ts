// Database types matching Prisma schema
export interface Profile {
  id: string;
  username?: string;
  full_name?: string;
  bio?: string;
  avatar_url?: string;
  github_url?: string;
  linkedin_url?: string;
  website_url?: string;
  skills: string[];
  role: 'MEMBER' | 'ADMIN' | 'MODERATOR';
  join_date: string;
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  content?: string;
  tech_stack: string[];
  github_url?: string;
  live_url?: string;
  featured_image?: string;
  status: 'ACTIVE' | 'COMPLETED' | 'ARCHIVED';
  is_featured: boolean;
  created_by?: string;
  created_at: string;
  updated_at: string;
  profile?: Profile;
}

export interface Event {
  id: string;
  title: string;
  description?: string;
  content?: string;
  event_date: string;
  end_date?: string;
  location?: string;
  event_type: 'WORKSHOP' | 'HACKATHON' | 'MEETUP' | 'CONFERENCE' | 'SOCIAL';
  max_participants?: number;
  registration_required: boolean;
  is_featured: boolean;
  featured_image?: string;
  created_by?: string;
  created_at: string;
  updated_at: string;
  profile?: Profile;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  featured_image?: string;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  is_featured: boolean;
  author_id?: string;
  published_at?: string;
  created_at: string;
  updated_at: string;
  author?: Profile;
}

export interface Achievement {
  id: string;
  member_id: string;
  badge_type: string;
  title: string;
  description?: string;
  icon?: string;
  color: string;
  earned_at: string;
  created_at: string;
  member?: Profile;
}

export interface EventRegistration {
  id: string;
  event_id: string;
  member_id: string;
  created_at: string;
  event?: Event;
  member?: Profile;
}

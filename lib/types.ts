// Shared TypeScript types used in the frontend
// These mirror the backend Prisma schema but can be a subset as needed

export interface Profile {
  id: string;
  username?: string;
  full_name?: string;
  avatar_url?: string;
  bio?: string;
  role?: string; // e.g., developer, designer, speaker
  skills: string[];
  join_date?: string;
  github_url?: string;
  linkedin_url?: string;
  website_url?: string;
  is_public?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  tech_stack: string[];
  github_url?: string;
  live_url?: string;
  status: 'ACTIVE' | 'COMPLETED' | 'ARCHIVED' | 'active' | 'completed' | 'archived';
  is_featured: boolean;
  created_at: string;
  profiles?: Profile; // relation
}

export interface Event {
  id: string;
  title: string;
  description?: string;
  event_date: string;
  event_type: 'WORKSHOP' | 'HACKATHON' | 'MEETUP' | 'CONFERENCE' | 'SOCIAL' | string;
  is_featured: boolean;
  created_at: string;
  profiles?: Profile;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  featured_image?: string;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED' | string;
  is_featured: boolean;
  published_at?: string;
  created_at: string;
  author?: Profile;
  profiles?: Profile; // for nested profile when fetched with join
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
  member?: Profile;
  profiles?: Profile; // nested profile on achievement join
}

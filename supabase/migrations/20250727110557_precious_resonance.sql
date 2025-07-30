/*
  # Team7 Database Schema

  1. New Tables
    - `profiles` - User profiles with extended information
    - `projects` - Club projects showcase
    - `events` - Club events and activities
    - `posts` - Blog posts and articles
    - `achievements` - Member achievements and badges
    - `event_registrations` - Event registration tracking

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Public read access for showcase content
*/

-- Create profiles table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text UNIQUE,
  full_name text,
  bio text,
  avatar_url text,
  github_url text,
  linkedin_url text,
  website_url text,
  skills text[] DEFAULT '{}',
  role text DEFAULT 'member' CHECK (role IN ('member', 'admin', 'moderator')),
  join_date timestamptz DEFAULT now(),
  is_public boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  content text,
  tech_stack text[] DEFAULT '{}',
  github_url text,
  live_url text,
  featured_image text,
  status text DEFAULT 'active' CHECK (status IN ('active', 'completed', 'archived')),
  is_featured boolean DEFAULT false,
  created_by uuid REFERENCES profiles(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  content text,
  event_date timestamptz NOT NULL,
  end_date timestamptz,
  location text,
  event_type text DEFAULT 'workshop' CHECK (event_type IN ('workshop', 'hackathon', 'meetup', 'conference', 'social')),
  max_participants integer,
  registration_required boolean DEFAULT true,
  is_featured boolean DEFAULT false,
  featured_image text,
  created_by uuid REFERENCES profiles(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create posts table (blog)
CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text,
  featured_image text,
  tags text[] DEFAULT '{}',
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  is_featured boolean DEFAULT false,
  author_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create achievements table
CREATE TABLE IF NOT EXISTS achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  badge_type text NOT NULL,
  title text NOT NULL,
  description text,
  icon text,
  color text DEFAULT '#007BFF',
  earned_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Create event registrations table
CREATE TABLE IF NOT EXISTS event_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events(id) ON DELETE CASCADE,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  status text DEFAULT 'registered' CHECK (status IN ('registered', 'attended', 'cancelled')),
  registered_at timestamptz DEFAULT now(),
  UNIQUE(event_id, user_id)
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (is_public = true);

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Projects policies
CREATE POLICY "Projects are viewable by everyone"
  ON projects FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update own projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (auth.uid() = created_by);

-- Events policies
CREATE POLICY "Events are viewable by everyone"
  ON events FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create events"
  ON events FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update own events"
  ON events FOR UPDATE
  TO authenticated
  USING (auth.uid() = created_by);

-- Posts policies
CREATE POLICY "Published posts are viewable by everyone"
  ON posts FOR SELECT
  USING (status = 'published');

CREATE POLICY "Authenticated users can create posts"
  ON posts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Users can update own posts"
  ON posts FOR UPDATE
  TO authenticated
  USING (auth.uid() = author_id);

-- Achievements policies
CREATE POLICY "Achievements are viewable by everyone"
  ON achievements FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can view own achievements"
  ON achievements FOR SELECT
  TO authenticated
  USING (auth.uid() = member_id);

-- Event registrations policies
CREATE POLICY "Users can view own registrations"
  ON event_registrations FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can register for events"
  ON event_registrations FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own registrations"
  ON event_registrations FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS profiles_username_idx ON profiles(username);
CREATE INDEX IF NOT EXISTS projects_created_by_idx ON projects(created_by);
CREATE INDEX IF NOT EXISTS projects_status_idx ON projects(status);
CREATE INDEX IF NOT EXISTS events_event_date_idx ON events(event_date);
CREATE INDEX IF NOT EXISTS posts_slug_idx ON posts(slug);
CREATE INDEX IF NOT EXISTS posts_status_idx ON posts(status);
CREATE INDEX IF NOT EXISTS achievements_member_id_idx ON achievements(member_id);

-- Insert some sample data
INSERT INTO profiles (id, username, full_name, bio, skills, role, is_public) VALUES
  ('00000000-0000-0000-0000-000000000001', 'admin', 'Team7 Admin', 'Administrator of Team7 Technical Club', ARRAY['Leadership', 'Management'], 'admin', true);

INSERT INTO projects (title, description, tech_stack, github_url, status, is_featured, created_by) VALUES
  ('Team7 Website', 'Official website for Team7 technical club built with Next.js and Supabase', ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'], 'https://github.com/team7/website', 'active', true, '00000000-0000-0000-0000-000000000001'),
  ('AI Chat Bot', 'Intelligent chatbot for member assistance', ARRAY['Python', 'TensorFlow', 'FastAPI'], 'https://github.com/team7/chatbot', 'completed', true, '00000000-0000-0000-0000-000000000001'),
  ('Mobile App', 'Team7 mobile application for iOS and Android', ARRAY['React Native', 'Expo', 'Firebase'], 'https://github.com/team7/mobile', 'active', false, '00000000-0000-0000-0000-000000000001');

INSERT INTO events (title, description, event_date, location, event_type, max_participants, is_featured, created_by) VALUES
  ('React Workshop', 'Learn React fundamentals and build your first app', '2024-02-15 18:00:00+00', 'Tech Hub Room 101', 'workshop', 30, true, '00000000-0000-0000-0000-000000000001'),
  ('Hackathon 2024', '48-hour coding challenge with amazing prizes', '2024-03-01 09:00:00+00', 'Innovation Center', 'hackathon', 100, true, '00000000-0000-0000-0000-000000000001'),
  ('Tech Talk: AI in 2024', 'Discussion on latest AI trends and developments', '2024-02-28 19:00:00+00', 'Virtual Event', 'meetup', 50, false, '00000000-0000-0000-0000-000000000001');

INSERT INTO posts (title, slug, excerpt, content, tags, status, is_featured, author_id, published_at) VALUES
  ('Welcome to Team7', 'welcome-to-team7', 'Introduction to our technical club and what we stand for', '# Welcome to Team7\n\nWe are excited to have you join our community of passionate developers and tech enthusiasts...', ARRAY['announcement', 'community'], 'published', true, '00000000-0000-0000-0000-000000000001', now()),
  ('Getting Started with React', 'getting-started-react', 'A beginner-friendly guide to React development', '# Getting Started with React\n\nReact is a powerful library for building user interfaces...', ARRAY['tutorial', 'react', 'javascript'], 'published', true, '00000000-0000-0000-0000-000000000001', now()),
  ('Team7 Project Guidelines', 'project-guidelines', 'Best practices for contributing to Team7 projects', '# Project Guidelines\n\nTo maintain code quality and consistency across all Team7 projects...', ARRAY['guidelines', 'development'], 'published', false, '00000000-0000-0000-0000-000000000001', now());
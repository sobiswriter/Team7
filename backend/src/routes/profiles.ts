import express from 'express';
import { prisma } from '../db.js';

const router = express.Router();

// GET /api/profiles - Get all profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await prisma.profile.findMany({
      where: { is_public: true },
      include: {
        achievements: true,
        _count: {
          select: {
            projects: true,
            posts: true,
            events: true
          }
        }
      },
      orderBy: { created_at: 'desc' }
    });
    res.json(profiles);
  } catch (error) {
    console.error('Error fetching profiles:', error);
    res.status(500).json({ error: 'Failed to fetch profiles' });
  }
});

// GET /api/profiles/:id - Get profile by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await prisma.profile.findUnique({
      where: { id },
      include: {
        projects: true,
        achievements: true,
        posts: { where: { status: 'PUBLISHED' } },
        events: true
      }
    });

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    res.json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// POST /api/profiles - Create new profile
router.post('/', async (req, res) => {
  try {
    const profileData = req.body;
    const profile = await prisma.profile.create({
      data: profileData
    });
    res.status(201).json(profile);
  } catch (error) {
    console.error('Error creating profile:', error);
    res.status(500).json({ error: 'Failed to create profile' });
  }
});

// PUT /api/profiles/:id - Update profile
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const profile = await prisma.profile.update({
      where: { id },
      data: updateData
    });
    
    res.json(profile);
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

export default router;

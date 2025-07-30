import express from 'express';
import { prisma } from '../db.js';

const router = express.Router();

// GET /api/achievements - Get all achievements
router.get('/', async (req, res) => {
  try {
    const { member_id, badge_type } = req.query;
    
    const where: any = {};
    if (member_id) where.member_id = member_id;
    if (badge_type) where.badge_type = badge_type;

    const achievements = await prisma.achievement.findMany({
      where,
      include: {
        member: {
          select: {
            id: true,
            username: true,
            full_name: true,
            avatar_url: true
          }
        }
      },
      orderBy: { earned_at: 'desc' }
    });
    
    res.json(achievements);
  } catch (error) {
    console.error('Error fetching achievements:', error);
    res.status(500).json({ error: 'Failed to fetch achievements' });
  }
});

// GET /api/achievements/:id - Get achievement by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const achievement = await prisma.achievement.findUnique({
      where: { id },
      include: {
        member: {
          select: {
            id: true,
            username: true,
            full_name: true,
            avatar_url: true
          }
        }
      }
    });

    if (!achievement) {
      return res.status(404).json({ error: 'Achievement not found' });
    }

    res.json(achievement);
  } catch (error) {
    console.error('Error fetching achievement:', error);
    res.status(500).json({ error: 'Failed to fetch achievement' });
  }
});

// POST /api/achievements - Create new achievement
router.post('/', async (req, res) => {
  try {
    const achievementData = req.body;
    const achievement = await prisma.achievement.create({
      data: achievementData,
      include: {
        member: {
          select: {
            id: true,
            username: true,
            full_name: true,
            avatar_url: true
          }
        }
      }
    });
    res.status(201).json(achievement);
  } catch (error) {
    console.error('Error creating achievement:', error);
    res.status(500).json({ error: 'Failed to create achievement' });
  }
});

export default router;

import express from 'express';
import { prisma } from '../db.js';

const router = express.Router();

// GET /api/events - Get all events
router.get('/', async (req, res) => {
  try {
    const { featured, type, upcoming } = req.query;
    
    const where: any = {};
    if (featured === 'true') where.is_featured = true;
    if (type) where.event_type = type;
    if (upcoming === 'true') {
      where.event_date = { gte: new Date() };
    }

    const events = await prisma.event.findMany({
      where,
      include: {
        profile: {
          select: {
            id: true,
            username: true,
            full_name: true,
            avatar_url: true
          }
        },
        _count: {
          select: {
            event_registrations: true
          }
        }
      },
      orderBy: [
        { is_featured: 'desc' },
        { event_date: 'asc' }
      ]
    });
    
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

// GET /api/events/:id - Get event by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        profile: {
          select: {
            id: true,
            username: true,
            full_name: true,
            avatar_url: true
          }
        },
        event_registrations: {
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
        }
      }
    });

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json(event);
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ error: 'Failed to fetch event' });
  }
});

// POST /api/events - Create new event
router.post('/', async (req, res) => {
  try {
    const eventData = req.body;
    const event = await prisma.event.create({
      data: eventData,
      include: {
        profile: {
          select: {
            id: true,
            username: true,
            full_name: true,
            avatar_url: true
          }
        }
      }
    });
    res.status(201).json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Failed to create event' });
  }
});

// POST /api/events/:id/register - Register for event
router.post('/:id/register', async (req, res) => {
  try {
    const { id } = req.params;
    const { member_id } = req.body;

    const registration = await prisma.eventRegistration.create({
      data: {
        event_id: id,
        member_id
      }
    });

    res.status(201).json(registration);
  } catch (error) {
    console.error('Error registering for event:', error);
    res.status(500).json({ error: 'Failed to register for event' });
  }
});

export default router;

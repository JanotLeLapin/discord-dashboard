import { Router } from 'express';
const router = Router();

import axios from 'axios';

const baseUrl = 'https://discord.com/api/';

router.get('/', async (req, res) => {
  const token = req.headers.authorization;
  if (!token) res.status(401).json({ message: 'Unauthorized.' });
  try {
    const guilds = await axios.get(baseUrl + 'users/@me/guilds', {
      headers: {
        Authorization: token,
      },
    });
    res.status(200).json(guilds.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

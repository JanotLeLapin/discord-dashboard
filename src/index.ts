import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

import guildsRoutes from './api/routes/guilds';

app.use('/api/guilds', guildsRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

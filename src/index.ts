import { configDotenv } from 'dotenv';
import app from './app';

configDotenv();

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

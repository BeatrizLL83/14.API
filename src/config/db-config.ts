
import { env } from './env.ts';
import debug from 'debug';
import { Prismapg } from 
import { PrismaClient } from '@prisma/client/extension';

const log = debug(`${env.PROJECT_NAME}:configDB`);

log('Loaded database connection...');

export const connectDB = async () => {
  //const pool = new Pool({
    //
 
    const adapter = new PrismaPg(
    user: env.PGUSER,
    password: env.PGPASSWORD,
    host: env.PGHOST,
    port: env.PGPORT,
    database: env.PGDATABASE
}),

  const prisma = new PrismaClient({
    adapter
  });

  try {
    await prisma.$connect();
    const [info] = (await prisma.$queryRaw`SELECT current_database()`) as {
      current_database: string;
    }[];
    log('Connected successfully to the database ${info?.current_database}`);
    await prisma.$disconnect();
  } catch (error) {
    Error('Error connecting to DB ->', error);
    throw error;
  }
  return prisma;
};

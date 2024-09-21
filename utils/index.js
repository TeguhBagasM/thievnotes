import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'

const sql = neon("postgresql://8bit-shawtydb_owner:6xHRlZq0hNbS@ep-solitary-lake-a6y9hr12.us-west-2.aws.neon.tech/top-20-ideas?sslmode=require");
export const db = drizzle(sql, {schema});


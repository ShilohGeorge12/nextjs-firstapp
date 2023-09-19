import { config } from 'dotenv';
config();
import { cleanEnv, port, str } from 'envalid';

export const env = cleanEnv(process.env, {
	PORT: port(),
	DATABASE_URL: str(),
	SECRET: str(),
});

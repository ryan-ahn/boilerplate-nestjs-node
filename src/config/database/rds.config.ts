import { registerAs } from '@nestjs/config';

export default registerAs('rds', () => {
  if (!process.env.TC_RDS_URL) {
    throw new Error('F800007');
  }
  if (!process.env.EP9_RDS_URL) {
    throw new Error('F800008');
  }

  return {
    tcRdsUrl: process.env.TC_RDS_URL,
    ep9RdsUrl: process.env.EP9_RDS_URL,
  };
});

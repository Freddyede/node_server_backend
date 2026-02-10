import cors from 'cors';

export const useCors = () => {
  return cors({
    origin: '*',
    credentials: true,
  });
};
import { nextSafe, provideHashesOrNonce, chain } from '@next-safe/middleware';

const isDev = process.env.NODE_ENV === 'development';

const middleware = nextSafe(() => ({
	isDev,
}));

export default chain(middleware, provideHashesOrNonce);

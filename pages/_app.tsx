import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<script
					id="one-signal-script-should-have-nonce-or-hash"
					src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
					async
				></script>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

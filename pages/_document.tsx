import { provideComponents } from '@next-safe/middleware/dist/document';
import Document, { DocumentContext, Html, Main } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return initialProps;
	}

	render() {
		const { Head, NextScript } = provideComponents(this.props);
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

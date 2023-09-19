import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'my first next app',
	description: 'checking out next js 13.4 out',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} w-full h-screen overflow-y-scroll bg-black text-white`}>{children}</body>
		</html>
	);
}

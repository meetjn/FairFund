import Web3ModalProvider from '@/wagmi/provider/web3-modal';
import { SessionProvider } from '@/components/session-provider';
import { headers } from 'next/headers';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/navbar';
import { getServerSession } from '@/app/api/auth/options';

export default async function ApplicationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookies = headers().get('cookie');
    const session = await getServerSession();

    return (
        <div className="h-screen">
            <SessionProvider session={session}>
                <Web3ModalProvider cookies={cookies}>
                    <Navbar />
                    <main className="h-full pt-[70px]">{children}</main>
                </Web3ModalProvider>
            </SessionProvider>
            <Toaster />
        </div>
    );
}

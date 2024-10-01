import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: '宅当家超市 - 即时零售，便捷生活',
    description: '加入宅当家超市，开启您的即时零售创业之旅。低投资高回报，完善的培训支持，先进的技术平台。',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="zh">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
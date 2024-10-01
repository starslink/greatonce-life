import { jsx as _jsx } from "react/jsx-runtime";
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
    title: '宅生活超市 - 即时零售，便捷生活',
    description: '加入宅生活超市，开启您的即时零售创业之旅。低投资高回报，完善的培训支持，先进的技术平台。',
};
export default function RootLayout({ children, }) {
    return (_jsx("html", { lang: "zh", children: _jsx("body", { className: inter.className, children: children }) }));
}

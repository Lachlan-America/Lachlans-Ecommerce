import { LinkType } from '@/app/components/Footer'
import Link from 'next/link';

interface FooterListProps {
    linkList: LinkType[];
}

export default function FooterList({ linkList }: FooterListProps) {
    return (
        <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2">
                {linkList.map((link: LinkType) => (
                    <li key={link.name}>
                        <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors">{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
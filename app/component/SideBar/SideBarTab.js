import React from "react";
import {
  MagicWand,
  Envelope,
  Pencil,
  Heart,
  User,
  Palette,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const LinkItem = ({ href, Icon, title }) => (
  <Link href={href} className="flex items-center p-4 space-x-3">
    <Icon width={28} height={28} className="text-lightgray" />
    <p>{title}</p>
  </Link>
);

export default function SideBarTab() {
  const links = [
    { href: "/start", Icon: MagicWand, title: "시작 도우미" },
    { href: "/newsletter", Icon: Envelope, title: "뉴스레터" },
    { href: "/intro", Icon: Pencil, title: "소개 페이지" },
    { href: "/subscripe", Icon: Heart, title: "구독자" },
    { href: "/admin", Icon: User, title: "관리자" },
    { href: "/design", Icon: Palette, title: "디자인" },
  ];

  return (
    <section className="px-8 space-y-[5px] menu mt-8">
      {links.map(({ href, Icon, title }) => (
        <LinkItem key={href} href={href} Icon={Icon} title={title} />
      ))}
    </section>
  );
}

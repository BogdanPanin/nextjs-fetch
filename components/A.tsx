import Link from "next/link";
import React from "react";
import style from "../styles/link.module.scss";

type Props = {
  text: string;
  href: string;
  className: string;
};

function A({ text, href, className }: Props) {
  return (
    <Link href={href} className={className}>
      {text}
    </Link>
  );
}

export default A;

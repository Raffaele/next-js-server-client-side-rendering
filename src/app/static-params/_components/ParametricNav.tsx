import Link from "next/link";

import style from "./ParametricNav.module.css";

export const ParametricNav = () => {
  return (
    <nav className={style.nav}>
      <Link href="/static-params/foo" className={style.link}>
        Foo (statically created)
      </Link>
      <Link href="/static-params/bar" className={style.link}>
        Bar (statically created)
      </Link>
      <Link href="/static-params/baz" className={style.link}>
        Baz (dynamically created)
      </Link>
    </nav>
  );
};

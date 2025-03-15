import Link from "next/link";

import style from "./ParametricNav.module.css";

export const ParametricNav = () => {
  return (
    <nav className={style.nav}>
      <Link href="/parametric/foo" className={style.link}>
        Foo
      </Link>
      <Link href="/parametric/bar" className={style.link}>
        Bar
      </Link>
      <Link href="/parametric/baz" className={style.link}>
        Baz
      </Link>
    </nav>
  );
};

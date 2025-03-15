import Link from "next/link";
import style from "./MainNav.module.css";
import { links } from "./links";

export const MainNav = () => (
  <aside className={style.mainAside}>
    <h3>Menu</h3>
    <nav>
      {links.map(({ label, href }) => (
        <Link href={href} key={href} className={style.navLink}>
          {label}
        </Link>
      ))}
    </nav>
  </aside>
);

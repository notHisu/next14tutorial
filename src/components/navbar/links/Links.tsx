import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

export function Links() {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink key={link.title} item={link} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }} />
      )}
    </div>
  );
}
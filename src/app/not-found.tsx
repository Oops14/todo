import Link from "next/link";

import s from "./page.module.scss";

const NotFound = () => {
  return (
    <div className={s.not_found}>
      <h1 className={s.not_found__title}>404 - Page Not Found</h1>
      <p className={s.not_found__subtitle}>The page you are looking for does not exist.</p>
      <Link href="/">Go back to home </Link>
    </div>
  );
};

export default NotFound;

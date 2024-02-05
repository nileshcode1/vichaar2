// "use client";
// import Link from "next/link";
// import styles from "./authLinks.module.css";
// import { useState } from "react";
// import { signOut, useSession } from "next-auth/react";

// const AuthLinks = () => {
//   const [open, setOpen] = useState(false);

//   const { status } = useSession();

//   return (
//     <>
//       {status === "unauthenticated" ? (
//         <Link href="/login" className={styles.link}>
//           Login
//         </Link>
//       ) : (
//         <>
//           <Link href="/write" className={styles.link}>
//             Write
//           </Link>
//           <span className={styles.link} onClick={signOut}>
//             Logout
//           </span>
//         </>
//       )}
//       <div className={styles.burger} onClick={() => setOpen(!open)}>
//         <div className={styles.line}></div>
//         <div className={styles.line}></div>
//         <div className={styles.line}></div>
//       </div>
//       {open && (
//         <div className={styles.responsiveMenu}>
//           <Link href="/">Homepage</Link>
//           {status === "notauthenticated" ? (
//             <Link href="/login">Login</Link>
//           ) : (
//             <>
//               <Link href="/write">Write</Link>
//               <span className={styles.link}>Logout</span>
//             </>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default AuthLinks;


"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {status === "unauthenticated" ? (
        <div className={styles.link} onClick={closeMenu}>
          <Link href="/login">Login</Link>
        </div>
      ) : (
        <>
          <div className={styles.link} onClick={closeMenu}>
            <Link href="/write">Write</Link>
          </div>
          <div
            className={styles.link}
            onClick={() => {
              signOut();
              closeMenu();
            }}
          >
            Logout
          </div>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <div onClick={closeMenu}>
            <Link href="/">Homepage</Link>
          </div>
          {status === "unauthenticated" ? (
            <div onClick={closeMenu}>
              <Link href="/login">Login</Link>
            </div>
          ) : (
            <>
              <div onClick={closeMenu}>
                <Link href="/write">Write</Link>
              </div>
              <div
                onClick={() => {
                  signOut();
                  closeMenu();
                }}
              >
                Logout
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;

// Get a login status from the store and display the header accordingly

import Link from "next/link";
import Container from "./Container";

type HeaderProps = {
  isLoggedIn: boolean;
};

export default function Header({ isLoggedIn = false }: HeaderProps) {
  return (
    <header className="h-16 flex justify-center items-center w-screen">
      <Container
        maxWidth="max-w-[1400px]"
        additionalClasses="flex justify-between"
      >
        <div className="">
          <h1>LOGO HERE</h1>
        </div>
        {isLoggedIn ? (
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/">How to use</Link>
              </li>
              <li>
                <Link href="/">Login</Link>
              </li>
              <li>
                <Link href="/">Resister</Link>
              </li>
            </ul>
          </nav>
        ) : (
          <h1>User page</h1>
        )}
      </Container>
    </header>
  );
}

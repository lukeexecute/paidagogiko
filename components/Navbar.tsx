import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/lib/session";

const Navbar = async () => {
  const session = await getCurrentUser();
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart">
        <Link href={"/"}>
          <Image
            className={"inline mr-3"}
            src="/pk_logo_sm.svg"
            alt="logo"
            width={30}
            height={30}
          />
        </Link>
        <span className="invisible md:visible">Παιδαγωγικό Κέντρο</span>
      </div>
      <div className="flexCenter space-x-4">
        {session?.user ? (
          <>
            {session?.user?.name && (
              <span className="invisible md:visible">{session.user.name}</span>
            )}
            {session?.user?.image && (
              <Link href="/user">
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </Link>
            )}
          </>
        ) : (
          <AuthProviders />
          // <>
          //   <Link href={"/login"}>
          //     <Button title="Sign In" occasion={"danger"} />
          //   </Link>
          // </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

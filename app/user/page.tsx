"use client";

import Button from "@/components/Button";
import { signOut } from "next-auth/react";

const User = () => {
  return (
    <div className="mainContent">
      <Button
        occasion={"danger"}
        title="Sign Out"
        handleClick={() => signOut()}
      />
    </div>
  );
};

export default User;

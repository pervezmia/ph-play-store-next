"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  console.log(session);
  const user = session?.user;
  // console.log(user.name);

  const handleSignOut = () => {
    authClient.signOut();
    router.push("/signin");
  };
  return (
    <div className=" bg-mist-600 p-3">
        <div className="max-w-[80%] mx-auto flex justify-between gap-4">

      <div className="flex justify-center gap-6">
        <Link href={"/"}>
          <p className="bg-blue-300 px-3 py-1 rounded-2xl">Home</p>
        </Link>
        <Link href={"/signup"}>
          <p className="bg-blue-300 px-3 py-1 rounded-2xl">Sign Up</p>
        </Link>
        <Link href={"/signin"}>
          <p className="bg-blue-300 px-3 py-1 rounded-2xl">Sign In</p>
        </Link>
        <Link href={"/server-action"}>
          <p className="bg-blue-300 px-3 py-1 rounded-2xl">Server Action</p>
        </Link>
      </div>
      <div className="flex gap-3.5 items-center text-white text-xs">
        <p
          className={`${user?.name ? "bg-green-400 px-3 py-1 rounded-2xl" : ""}`}
        >
          {user?.name}
        </p>
        <Button onClick={handleSignOut} variant="danger">
          Log Out
        </Button>
      </div>
        </div>
    </div>
  );
};

export default Navbar;

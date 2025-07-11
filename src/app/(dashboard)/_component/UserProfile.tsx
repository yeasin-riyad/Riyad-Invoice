import React from "react";
import UserEditProfile from "./UserEditProfile";
import { auth } from "@/lib/auth";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const UserProfile = async () => {
  const session = await auth();
  return (
    <Dialog>
      <DialogTrigger className="w-full text-left px-2 py-1 cursor-pointer hover:bg-muted-foreground/5">
        Profile
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Profile</DialogTitle>
          <DialogDescription>Edit Your Profile Details Here.</DialogDescription>
        </DialogHeader>

        {/* User Profile Display and Edit */}
        <UserEditProfile
          firstName={session?.user.firstName as string}
          lastName={session?.user.lastName as string}
          email={session?.user.email as string}
          currency={session?.user.currency as string}
        />
      </DialogContent>
    </Dialog>
  );
};

export default UserProfile;

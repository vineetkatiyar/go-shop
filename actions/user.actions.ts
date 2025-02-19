"use server";

import { userSignInSchema } from "@/lib/validator";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function signInAction(prevState: unknown, formData: FormData) {
  try {
    const user = userSignInSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    await signIn("credentials", user);
    return { success: true, message: "User signed in successfully" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw new Error();
    }
    return { success: false, message: "Invalid password or email" };
  }
}

//signout

export async function signOutUser() {
  await signOut();
}

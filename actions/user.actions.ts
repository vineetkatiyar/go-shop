"use server";

import { userSignInSchema, userSignUpSchema } from "@/lib/validator";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { hashSync } from "bcrypt-ts-edge";
import { prisma } from "@/db/prisma";
import { formatError } from "@/lib/utils";

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
      throw error;
    }
    return { success: false, message: "Invalid password or email" };
  }
}

//signout

export async function signOutUser() {
  await signOut();
}

//signup

export async function signUpAction(prevState: unknown, formData: FormData) {
  try {
    const user = userSignUpSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    const plainPassword = user.password;
    user.password = hashSync(user.password, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    await signIn("credentials", {
      email: user.email,
      password: plainPassword,
    });
    return {
      success: true,
      message: "User signed up successfully",
    };
  } catch (error) {
    // console.log(error.name)
    // console.log(error.code)
    // console.log(error.errors)
    // console.log(error.meta?.target)
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: formatError(error) };
  }
}

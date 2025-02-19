import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { SignInForm } from "./sign-in-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "sign-in",
};

export default async function SinInPageCredentials() {
  const session = await auth();
  if (session) {
    return redirect("/");
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
            <Image
              src="./images/logo.svg"
              alt={`${APP_NAME} logo`}
              priority={true}
              height={100}
              width={100}
            />
          </Link>
          <CardTitle className="text-center">SignIn</CardTitle>
          <CardDescription className="text-center">
            Sign In to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
}

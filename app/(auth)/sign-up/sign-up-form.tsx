"use client";

import { useActionState } from "react";
import { signUpUser } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpDefaultVlaue } from "@/lib/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function SignUpForm() {
  const [state, formAction, isPending] = useActionState(signUpUser, {
    success: false,
    message: "",
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <form action={formAction}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div className="space-y-6">
          <div>
            <Label htmlFor="name" className="space-y-6">
               Name
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="john"
                defaultValue={signUpDefaultVlaue.name}
                autoComplete="name"
              />
            </Label>
          </div>
          <div>
            <Label htmlFor="email" className="space-y-6">
               Email
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                defaultValue={signUpDefaultVlaue.email}
                autoComplete="email"
              />
            </Label>
          </div>
          <div>
            <Label htmlFor="password">
               Password
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="*******"
                defaultValue={signUpDefaultVlaue.password}
                autoComplete="password"
                required
              />
            </Label>
          </div>
          <div>
            <Label htmlFor="confirmPassword">
               confirm-password
              <Input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="*******"
                defaultValue={signUpDefaultVlaue.password}
                autoComplete="password"
                required
              />
            </Label>
          </div>
        </div>
        <div>
          <Button className="w-full" variant="default">
            {isPending ? "Signing-up..." : "sign-up"}
          </Button>
        </div>

        {state && !state.success && (
          <div className="text-center text-destructive">{state.message}</div>
        )}

        <div className="text-sm text-center text-muted-foreground">
          already have an account?
          <Link href="/sign-in" target="_self" className="link">
            Sign In
          </Link>
        </div>
      </div>
    </form>
  );
}

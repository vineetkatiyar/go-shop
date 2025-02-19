"use client";

import { useActionState } from "react";
import { signInAction } from "@/actions/user.actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultVlaue } from "@/lib/constants";

import Link from "next/link";

export function SignInForm() {
  const [state, formAction, isPending] = useActionState(signInAction, {
    success: false,
    message: "",
  });

  return (
    <form action={formAction}>
      <div className="space-y-6">
        <div className="space-y-6">
          <div>
            <Label htmlFor="email" className="space-y-6">
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                defaultValue={signInDefaultVlaue.email}
                autoComplete="email"
                required
              />
            </Label>
          </div>
          <div>
            <Label htmlFor="password">
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="*******"
                defaultValue={signInDefaultVlaue.password}
                autoComplete="password"
                required
              />
            </Label>
          </div>
        </div>
        <div>
          <Button className="w-full" variant="default">
            {isPending ? "Signing-in..." : "signin"}
          </Button>
        </div>

        {state && !state.success && (
          <div className="text-center text-destructive">{state.message}</div>
        )}

        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?
          <Link href="/sign-up" target="_self" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
}

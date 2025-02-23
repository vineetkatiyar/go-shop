import { auth } from "@/auth";
import { getMyCart } from "@/lib/actions/cart.actions";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.actions";
import { ShippingAddress } from "@/types";
import { AddressForm } from "./shipping-address-form";
import CheckoutSteps from "@/components/shared/chekout-step";

export const metadata: Metadata = {
  title: "Shipping Address",
};

export default async function ShippingAddressPage() {
  const cart = await getMyCart();

  if (!cart || cart.items.length === 0) redirect("/cart");

  const session = await auth();

  const userId = session?.user?.id;

  if (!userId) throw new Error("No user ID");

  const user = await getUserById(userId);

  return (
    <>
      <CheckoutSteps current={1} />
      <AddressForm address={user.address as ShippingAddress} />
    </>
  );
}

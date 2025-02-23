import { Metadata } from "next";
import { CartTable } from "@/app/(root)/cart/cart-table";
import { getMyCart } from "@/lib/actions/cart.actions";

export const metadata: Metadata = {
  title: "Cart page",
};

export default async function Cart() {
  const cart = await getMyCart();
  return (
    <div>
      <CartTable cart={cart} />
    </div>
  );
}

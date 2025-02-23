import { z } from "zod";
import {
  insterProductSchema,
  insterCartSchema,
  CartSchema,
  shippingAddressSchema,
} from "@/lib/validator";

export type Product = z.infer<typeof insterProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};

export type Cart = z.infer<typeof insterCartSchema>;
export type CartItem = z.infer<typeof CartSchema>;
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;

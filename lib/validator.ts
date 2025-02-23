import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must have exactly two decimal places"
  );

export const insterProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  category: z.string().min(3, "Category must be at least 3 characters"),
  brand: z.string().min(3, "brand must be at least 3 characters"),
  description: z.string().min(3, "description must be at least 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string().min(1, "Product must have at least one image")),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

export const userSignInSchema = z.object({
  email: z.string().email("valid email address"),
  password: z.string().min(6, "password must be at least 6 characters"),
});

export const userSignUpSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("valid email address"),
    password: z.string().min(6, "password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does't match",
    path: ["confirmPassword"],
  });

//Cart schema
export const CartSchema = z.object({
  productId: z.string().min(1, "productId is required"),
  name: z.string().min(1, "product name is required"),
  slug: z.string().min(1, "slug is required"),
  qty: z.number().int().nonnegative("Quantity must be a positive number"),
  image: z.string().min(1, "image is required"),
  price: currency,
});

export const insterCartSchema = z.object({
  items: z.array(CartSchema),
  itemsPrice: currency,
  totalPrice: currency,
  shippingPrice: currency,
  taxPrice: currency,
  sessionCartId: z.string().min(1, "session cart id is required"),
  userId: z.string().optional().nullable(),
});

export const shippingAddressSchema = z.object({
  fullName: z.string().min(3, "fullName atleast 3 characters"),
  streetAddress: z.string().min(3, "streetAddress atleast 3 characters"),
  city: z.string().min(3, "city atleast 3 characters"),
  postleCode: z.string().min(3, "postcode must be at least 3 characters"),
  country: z.string().min(3, "country must be at least 3 characters"),
  lat: z.number().optional(),
  lng: z.number().optional(),
});

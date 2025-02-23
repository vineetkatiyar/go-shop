export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "GoShop";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || "E-Commerce Platform";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const signInDefaultVlaue = {
  email: "",
  password: "",
};

export const signUpDefaultVlaue = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const shippingAddressDefaultVlaue = {
  fullName: "",
  streetAddress: "",
  city: "",
  postalCode: "",
  country: "",
};

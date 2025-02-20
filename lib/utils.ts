import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert prisma object into a regular JS object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// Format number with decimal places
export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}

//format error
export function formatError(error: any) {
  if (error.name === "ZodError") {
    //handle zod error
    const fieldErrors = Object.keys(error.errors).map(
      (field) => error.errors[field].message
    );
    return fieldErrors.join(". ");
  } else if (
    error.name === "PrismaClientKnownRequestError" &&
    error.code === "P2002"
  ) {
    //HANDLE PRISMA error
    const prismaError = error.meta?.target ? error.meta.target[0] : "Field";
    return `${
      prismaError.charAt(0).toUpperCase() + prismaError.slice(1)
    } already exists`;
  } else {
    //handle other error
    return typeof error.message === "string"
      ? error.message
      : JSON.stringify(error.message);
  }
}

import {z} from "zod";
import { insterProductSchema } from "@/lib/validator";

export type Product =z.infer<typeof insterProductSchema> &{
     id : string;
     rating : string;
     createdAt : Date;
}
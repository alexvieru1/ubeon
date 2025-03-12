/* eslint-disable @typescript-eslint/no-explicit-any */
import * as z from "zod"

export interface ActionResponse < T = any > {
  success: boolean
  message: string
  errors ? : {
    [K in keyof T] ? : string[]
  }
  inputs ? : T
}
export const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email("Email invalid"),
  phoneNumber: z.string().regex(/^07\d{8}$/, "Nr. invalid"),
  service: z.string().min(1),
  message: z.string(),
});

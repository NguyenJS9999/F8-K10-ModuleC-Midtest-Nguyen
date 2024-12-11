import * as z from "zod";

export const schemaProduct = z.object({
	title: z.string().trim().min(6, { message: "Tên sản phẩm cần tối thiểu 6 ký tự" }),
	price: z.number().positive(),
	description: z.string().trim().optional(),
});

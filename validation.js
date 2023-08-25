import { body } from "express-validator";

export const loginValidation = [
    body("email").isEmail(),
    body("password").isLength({min: 5}),
]

export const registerValidation = [
    body("fullName").isLength({min: 5}),
    body("email").isEmail(),
    body("password").isLength({min: 5}),
    body("avatarUrl").optional(true),
]

export const postCreateValidation = [
    body("title", 'Invalid title').isLength({min: 3}).isString(),
    body("text", 'Write text').isLength({min: 10}).isString(),
    body("tags", 'Wrong tags').optional().isArray(),
    body("imageUrl", 'Wrong URL').optional().isString(),
]


import { body } from "express-validator";

export const registerValidator = [
    body('name', "Ім'я має складатися мінімум з 3 символів").isLength({min: 3}),
    body('museumName', "Назва музею має складатися мінімум з 5 символів").isLength({min:5}),
    body('mobileNumber', "Номер телефону має складатися мінімум з 10 символів").isLength({min:10}),
]
"use strict";

import Joi from "joi";

export const userBodyValidation = Joi.object({
    email: Joi.string()
        .min(6)
        .max(255)
        .pattern(/^[\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
        .required()
        .messages({
            "string.min": "El email debe tener al menos 6 caracteres.",
            "string.max": "El email debe tener como máximo 255 caracteres.",
            "string.pattern.base": "El formato del email no es valido.",
            "string.empty": "El email es obligatorio.",
        }),
    password: Joi.string()
        .min(8)
        .max(26)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+.,;:<>?{}\[\]~-]).+$/)
        .required()
        .messages({
            "string.min": "La contraseña debe tener al menos 8 caracteres.",
            "string.max": "La contraseña debe tener como máximo 26 caracteres.",
            "string.pattern.base": "La contraseña debe incluir al menos una letra mayúscula, una minúscula, un número y un carácter especial.",
            "string.empty": "La contraseña es obligatoria.",
        }),
})
    .unknown(false)
    .messages({
        "object.unknown": "No se permiten campos adicionales.",
    });


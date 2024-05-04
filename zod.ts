import { z } from "zod";

const loginValidation  = z.object({
    email: z.string().min(5).max(20).email(),
    password: z.string().min(8).max(50),
});

const request = {
    email: "izzhar@mail.com",
    password: "password"
};

loginValidation.parse(request);

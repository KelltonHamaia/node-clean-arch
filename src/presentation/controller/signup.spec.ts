import { SignUpController } from "./signup";
import { MissingParamError } from "../error/missing-param-error";

describe("Signup controller", () => {
    
    test("Should return 400 if no name is provided", () => {
        const sut = new SignUpController();
        const httpRequest = {
            body: {
                email: "teste@email.com",
                password: "123456",
                passwordConfirmation: "123456",
            }
        }

        const httpResponse = sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new MissingParamError("name"));

    })

    test("Should return 400 if no email is provided", () => {
        const sut = new SignUpController();
        const httpRequest = {
            body: {
                name: "kellton",
                password: "123456",
                passwordConfirmation: "123456",
            }
        }

        const httpResponse = sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new MissingParamError("email"));

    })


})
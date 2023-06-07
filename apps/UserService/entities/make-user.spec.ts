import makeUser from "./index";

describe("User Entity", () => {
    it("should throw an error for invalid email address", () => {
        expect(() => {
            makeUser({
                email: "Vishnu Krishnathu",
                full_name: "Vishnu Krishnathu",
                password: "journal_app^345",
            });
        }).toThrow("Email address is invalid");

        expect(() => {
            makeUser({
                email: "",
                full_name: "Vishnu Krishnathu",
                password: "journal_app^345",
            });
        }).toThrow("Email address is invalid");
    });

    it("should throw an error for invalid password", () => {
        expect(() => {
            makeUser({
                email: "vishnu.k@cantileverlabs.com",
                full_name: "Vishnu Krishnathu",
                password: "123456",
            });
        }).toThrow("Invalid password");

        expect(() => {
            makeUser({
                email: "vishnu.k@cantileverlabs.com",
                full_name: "Vishnu Krishnathu",
                password: "Vis1",
            });
        }).toThrow("Invalid password");

        expect(() => {
            makeUser({
                email: "vishnu.k@cantileverlabs.com",
                full_name: "Vishnu Krishnathu",
                password: "VISHNU231",
            });
        }).toThrow("Invalid password");

        expect(() => {
            makeUser({
                email: "vishnu.k@cantileverlabs.com",
                full_name: "Vishnu Krishnathu",
                password: "vishnu@123",
            });
        }).toThrow("Invalid password");

        expect(() => {
            makeUser({
                email: "vishnu.k@cantileverlabs.com",
                full_name: "Vishnu Krishnathu",
                password: "j2",
            });
        }).toThrow("Invalid password");
    });

    it("should throw an error for invalid full name", () => {
        expect(() => {
            makeUser({
                email: "vishnu.k@cantileverlabs.com",
                full_name: "VI",
                password: "journaL^123",
            });
        }).toThrow('Invalid "full_name"');

        expect(() => {
            makeUser({
                email: "vishnu.k@cantileverlabs.com",
                full_name: "      VI         ",
                password: "journaL^123",
            });
        }).toThrow('Invalid "full_name"');

        expect(() => {
            makeUser({
                email: "vishnu.k@cantileverlabs.com",
                full_name:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis.",
                password: "journaL^123",
            });
        }).toThrow('Invalid "full_name"');
    });

    it("should set user to premium", () => {
        let user = makeUser({
            email: "vishnu.k@cantileverlabs.com",
            full_name: "Vishnu Krishnathu",
            password: "Journal_app^2",
        });
        user.activatePremium();

        expect(user.isPremium()).toBe(true);
    });

    it("should deactivate premium liscence", () => {
        let user = makeUser({
            email: "vishnu.k@cantileverlabs.com",
            full_name: "Vishnu Krishnathu",
            password: "Journal_app^2",
            premium: true,
        });
        user.disablePremium();

        expect(user.isPremium()).toBe(false);
    });

    it("should hash the passoword", async () => {
        let user = makeUser({
            email: "vishnu.k@cantileverlabs.com",
            full_name: "Vishnu Krishnathu",
            password: "Journal_app^2",
        });

        expect(await user.isPremium()).not.toBe(user.getPassword());
    });
});

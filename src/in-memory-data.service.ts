import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let users = [
            { id: "u1", firstName: 'John', lastName: "Doe", email: "spam@email.com", pantryId: "ab", createdAt: new Date(), updatedAt: null, deletedAt: null, password: "Enter1" },
            { id: "u2", firstName: 'Bernard', lastName: "VC", email: "spam2@email.com", pantryId: "1b", createdAt: new Date(), updatedAt: null, deletedAt: null, password: "Azert2" }
        ];

        let pantryItems = [
            { id: "pi1", name: "spaghettisaus", pantryId: "1b" },
            { id: "pi2", name: "stoofpot", pantryId: "1b" }
        ]

        return { users, pantryItems };
    }
}
interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    pantryId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isDeleted: boolean;
    password: string; //temp
}

export class User implements IUser {
    constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public pantryId: string,
        public createdAt: Date,
        public updatedAt: Date,
        public deletedAt: Date,
        public isDeleted: boolean,
        public password: string
    ) {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.pantryId = "";
        this.createdAt = new Date();
        this.updatedAt = null;
        this.deletedAt = null;
        this.isDeleted = false;
        this.password = "";
    }
}

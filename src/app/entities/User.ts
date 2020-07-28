export class User {

    public email: string;
    public password: string;
    public name?: string;
    public token?: string;
    public lastLogin?: number;
    public created?: number;

    constructor() { }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getToken(): string {
        return this.token;
    }

    public setToken(token: string): void {
        this.token = token;
    }

    public getLastLogin(): number {
        return this.lastLogin;
    }

    public setLastLogin(lastLogin: number): void {
        this.lastLogin = lastLogin;
    }

    public getCreated(): number {
        return this.created;
    }

    public setCreated(created: number): void {
        this.created = created;
    }
}
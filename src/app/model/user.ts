import { Adress } from './addres';
import { Company } from './company';

export class User {
    private name: string;
    private username: string;
    private email: string;
    private adress: Adress;
    private company: Company;
    private phone: string;
    private website: string;

    public constructor(name: string, username: string, email: string) {
        this.name = name;
        this.username = username;
        this.email = email;
    }
    public getName(): string {
        return this.name;
    }
    public getUsername(): string {
        return this.username;
    }
    public getEmail(): string {
        return this.email;
    }

    public getcompany(): Company {
        return this.company;
    }
    public getphone(): string {
        return this.phone;
    }
    public getwebsite(): string {
        return this.website;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public setUsername(username: string): void {
        this.username = username;
    }
    public setEmail(email: string): void {
        this.email = email;
    }

    public getAdress(): Adress {
        return this.adress;
    }
    public setAdress(Adress: Adress) {
        this.adress = Adress;
    }

    public setcompany(Company: Company) {
        this.company = Company;
    }
    public setphone(v: string) {
        this.phone = v;
    }
    public setwebsite(v: string) {
        this.website = v;
    }

}
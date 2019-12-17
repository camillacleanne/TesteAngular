import { geo } from './geo';

export class Adress {
    private street: string;
    private suite: string;
    private city: string;
    private zipcode: string;
    private geo: geo; 


    public constructor(street: string, suite: string, city: string, zipcode: string) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
    }

    public getStreet(): string {
        return this.street;
    }
    public getSuite(): string {
        return this.suite;
    }
    public getCity(): string {
        return this.city;
    }
    public getZipcode(): string {
        return this.zipcode;
    }
    public setStreet(street: string): void {
        this.street = street;
    }
    public setSuite(suite: string): void {
        this.suite = suite;
    }
    public setCity(city: string): void {
        this.city = city
    }
    public setZipcode(zipcode: string): void {
        this.zipcode = zipcode;
    }

}
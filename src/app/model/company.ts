export class Company {
    private name: string;
    private catchPhrase: string;
    private bs: string;

    public constructor(name: string, catchPhrase: string, bs: string) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }

    public getname(): string {
        return this.name;
    }
    public setname(v: string) {
        this.name = v;
    }

    public getcatchPhrase(): string {
        return this.catchPhrase;
    }
    public setcatchPhrase(v: string) {
        this.catchPhrase = v;
    }


 
    public getbs(): string {
        return this.bs;
    }
    public setbs(v: string) {
        this.bs = v;
    }
}
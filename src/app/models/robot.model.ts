export class Robot {

    id?: string;
    name: string;
    description: string;
    constructorName: string;
    serviceType: string;
    creator: string;
    releaseDate: string;
    price: string;

    constructor() {
        this.name = '';
        this.description = '';
        this.constructorName = '';
        this.serviceType = '';
        this.creator = '';
        this.releaseDate = '';
        this.price = '';
    }
}

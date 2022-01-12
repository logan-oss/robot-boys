export class Robot {

    id?: string;
    name: string;
    description: string;
    constructorName: string;
    serviceType: string;
    creator: string;
    releaseDate: Date;
    price: string;
    image: string;

    constructor() {
        this.name = '';
        this.description = '';
        this.constructorName = '';
        this.serviceType = '';
        this.creator = '';
        this.releaseDate = new Date();
        this.price = '';
        this.image = '';
    }
}

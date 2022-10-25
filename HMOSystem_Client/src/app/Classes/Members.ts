import { vaccinations } from './Vaccinations';

export class Members {
    constructor(
        public memberId: string,
        public firstName: string,
        public lastName: string,
        public id: string,
        public city: string,
        public street: string,
        public numHouse: number,
        public birthday: any,
        public telephone: string,
        public pelephone: string,
        public positiveDate: any,
        public recoveryDate: any,
        public vaccinations:vaccinations[]) { }
}


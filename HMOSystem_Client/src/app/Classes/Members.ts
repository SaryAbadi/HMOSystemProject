import { vaccinations } from './Vaccinations';

export class Members {
    constructor(
        public MemberId: string,
        public FirstName: string,
        public LastName: string,
        public Id: string,
        public City: string,
        public Street: string,
        public NumHouse: number,
        public Birthday: Date,
        public Telephone: string,
        public Pelephone: string,
        public PositiveDate: Date,
        public RecoveryDate: Date,
        public Vaccinations:vaccinations[]) { }
}


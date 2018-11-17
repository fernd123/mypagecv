export class PersonalData{
    id: string;
    name: String;
    lastname: String;
    birthday: Date;
    phone: String;
    mail: String;
    city: String;
    country: String;
    information: String;

    constructor(){
        this.id = null;
        this.name = "";
        this.lastname = "";
        this.birthday = null;
        this.phone = "";
        this.mail = "";
        this.city = "";
        this.country = "España";
        this.information = "";
    }
}
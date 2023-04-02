class Person {
    constructor(name, surname, year, month, day) {
        this.name = name;
        this.surname = surname;
        this.dob=new Date(year, month-1, day);
    }
    
    toString(){
        return `${this.name} ${this.surname}`
    }

    getAge()
        {
        let tempDate=new Date();
        let dob=this.dob;
        let age = tempDate.getFullYear()-dob.getFullYear();
        if(tempDate.getMonth()>dob.getMonth() && (tempDate.getDate()>dob.getDate()))
            return age-1; 
        return age;
        }

    isBirthday()
        {
        let tempDate=new Date();
        let dob=this.dob;
        return tempDate.getMonth()===dob.getMonth() && tempDate.getDate()===dob.getDate();
        }
}
class Park {

    constructor(name, buildYear, parkArea, treesNumber) {
        this.name = name;
        this.buildYear = buildYear;
        this.parkArea = parkArea;
        this.treesNumber = treesNumber;
    }

    treeDensity() {
        return (`${this.name} has a tree density of ${this.treesNumber} / ${this.parkArea} per square km`);
    }
}

class Street {

    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }

}

class Town {

    constructor(name, parks, ...streets) {
        this.name = name;
        this.parks = [];
        this.streets = [];

        for (let i of parks) {
            this.parks.push(i);
        }

        for (let i of streets) {
            this.streets.push(i);
        }
    }

    averageParkAge() {

        let ageSum = this.parks.reduce((sum, current) => (sum + current.buildYear), 0);
        return `our ${this.parks.length} parks have an average age of ${ageSum/this.parks.length} years`;

    }
    
    mostTree(){
        let biggest;
        
        
    }
}


const park1 = new Park('Saint Enda\'s Park', 1985, 300, 133);
const park2 = new Park('Saint Stephen\'s Green Park', 1955, 400, 122);

const street1 = new Street('Grande Road', 1500);
const street2 = new Street('Oconnel Street', 1000);
const street3 = new Street('George Street', 500);
const street4 = new Street('Parnel Street', 1);

//using rest parameters
const town = new Town('Dublin', [park1, park2], street1, street2, street3, street4);


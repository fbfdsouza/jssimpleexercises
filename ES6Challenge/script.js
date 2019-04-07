class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {

    constructor(name, buildYear, parkArea, treesNumber) {
        super(name, buildYear);
        this.parkArea = parkArea;
        this.treesNumber = treesNumber;
    }

    treeDensity() {
        return (`${this.name} has a tree density of ${this.treesNumber/this.parkArea} per square km`);
    }

    getAge() {
        return (new Date).getFullYear() - this.buildYear;
    }
}

class Street extends Element {

    constructor(name, buildYear, slength, sizeClassification) {
        super(name, buildYear);
        this.slength = slength;
        this.sizeClassification = sizeClassification;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'medium');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        
        return `${this.name}  build in ${this.buildYear}, is a ${classification.get(this.sizeClassification)} street`;

    }

    getStreetLength() {
        return this.slength;
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

    parkAverageAge() {

        let ageSum = this.parks.reduce((sum, current) => (sum + current.getAge()), 0);
        return `our ${this.parks.length} parks have an average age of ${ageSum/this.parks.length} years`;

    }

    moreThanThousandTree() {
        this.parks.forEach(current => {
            if (current.treesNumber > 1000)
                console.log(`${current.name} has more than a thousand trees`);
        })
    }

    mostTree() {
        let biggest;
    }

    allParkTreeDensity() {
        for (let i of this.parks) {
            console.log(i.treeDensity());
        }
    }

    totalStreetsLength() {
        let ageSum = this.streets.reduce((sum, current) => (sum + current.getStreetLength()), 0);
        return ageSum;
    }

    averageStreetsLength() {
        return this.totalStreetsLength() / this.streets.length;
    }

    totalAndAverageStreetLength() {
        return `our ${this.streets.length} streets have a total street lenght of ${this.totalStreetsLength()} with an average stret lenght of ${this.averageStreetsLength()}`;
    }

    presentAllSteet() {
        for (let i of this.streets) {
            console.log(i.classifyStreet());
        }
    }

    parkReport() {
        console.log(`-------------------PARK REPORT------------------------`);
        this.parkAverageAge();
        this.allParkTreeDensity()
        this.mostTree();
        this.moreThanThousandTree();

    }

    streetReport() {
        console.log(`-------------------STREET REPORT------------------------`);
        this.totalAndAverageStreetLength();
        this.presentAllSteet();
    }

}


const park1 = new Park('Saint Enda\'s Park', 1985, 300, 133);
const park2 = new Park('Saint Stephen\'s Green Park', 1955, 1400, 1122);

/*
const street1 = new Street('Grande Road', 1500, 605, 'medium');
const street2 = new Street('Oconnel Street', 1000, 121, 'small');
const street3 = new Street('George Street', 500, 1000, 'big');
const street4 = new Street('Parnel Street', 1, 2304, 'huge');*/

//destructuring
const [street1, street2, street3, street4] = [new Street('Grande Road', 1500, 605, 2), new Street('Oconnel Street', 1000, 121, 1),
                                          new Street('George Street', 500, 1000, 4), new Street('Parnel Street', 1, 2304, 5)];

//using spread operator
const firstPartTownArgument = ['Dublin', [park1, park2]];

//using rest parameters only for learning purposes
const town = new Town(...firstPartTownArgument, street1, street2, street3, street4);

town.parkReport();
town.streetReport();

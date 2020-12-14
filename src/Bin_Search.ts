//TODO: create new version and define Search as function
//make it generic


class mySearch {

    private sorted_list:number[];

    constructor(list:number[]){
        this.sorted_list = list;
    }

    public get(position:number):number{
        return this.sorted_list[position];
    }

    public binarySearch(value:number):number|string{
        
        //let position: number;
        
        //initial value for position
        let position = -1;

        //first index in array
        let first = 0;

        //last index in array
        let last:number = this.sorted_list.length - 1;

        let found = false;
        let middle:number;

        while (found === false && first <= last) {

            middle = Math.floor((first + last) / 2);

            if (this.sorted_list[middle] === value) {
                found = true;
                position = middle;
            } else if (this.sorted_list[middle] > value){
                // value is in right part of list
                last = middle - 1;
            } else {
                // value is in left part of list
                first = middle + 1;
            }

        }

        if (position === -1) {
            return "Value has not found";
        }
        else {
            return position;
        }
    }
}

let value:number;

const number_list:number[] = [0,5,3,17,20,35,39,51,57];
const Search_Object:mySearch = new mySearch(number_list);

//try to find value 0
value = 0;
console.log("\nValue: ",
            value,
            "\nPosition: ",
            Search_Object.binarySearch(value));

//try to find value 7
value = 7;
console.log("\nValue: ",
            value,
            "\nPosition: ",
            Search_Object.binarySearch(value));

//try to find value 5
value = 5;
console.log("\nValue: ",
            value,
            "\nPosition: ",
            Search_Object.binarySearch(value));

//try to find value 9
value = 9;
console.log("\nValue: ",
            value,
            "\nPosition: ",
            Search_Object.binarySearch(value));

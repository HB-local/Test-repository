"use strict";
//TODO: create new version and define Search as function
//make it generic
class mySearch {
    constructor(list) {
        this.sorted_list = list;
    }
    get(position) {
        return this.sorted_list[position];
    }
    binarySearch(value) {
        //let position: number;
        //initial value for position
        let position = -1;
        //first index in array
        let first = 0;
        //last index in array
        let last = this.sorted_list.length - 1;
        let found = false;
        let middle;
        while (found === false && first <= last) {
            middle = Math.floor((first + last) / 2);
            if (this.sorted_list[middle] === value) {
                found = true;
                position = middle;
            }
            else if (this.sorted_list[middle] > value) {
                // value is in right part of list
                last = middle - 1;
            }
            else {
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
let value;
const number_list = [0, 5, 3, 17, 20, 35, 39, 51, 57];
const Search_Object = new mySearch(number_list);
//try to find value 0
value = 0;
console.log("\nValue: ", value, "\nPosition: ", Search_Object.binarySearch(value));
//try to find value 7
value = 7;
console.log("\nValue: ", value, "\nPosition: ", Search_Object.binarySearch(value));
//try to find value 5
value = 5;
console.log("\nValue: ", value, "\nPosition: ", Search_Object.binarySearch(value));
//try to find value 9
value = 9;
console.log("\nValue: ", value, "\nPosition: ", Search_Object.binarySearch(value));
//# sourceMappingURL=Bin_Search.js.map
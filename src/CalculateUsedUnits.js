export default function CalculateUsedUnits(elecInput) {
    let ans =  11005 - 11000;
    let bill= 0;
    if( ans <= 100) 
        bill = (ans * .10) / 100;
    else {
        bill = (ans -100) * .20 + 10;
    }
    return ( bill );
}
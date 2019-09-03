export default function CalculateUsedUnits(elecInput) {
    let ans =  11100 - 11000;
    let bill= 0;
    if( ans <= 100) {
        bill = (ans * .10);
    } else {
        bill = (ans -100) * .20 + 10;
    }
    return ( bill );
}
// variabel
const maximalMiniBus = 4;
const string = " ";

// conditional
function RequiredBus(totalFamilies, memberOfFamilies){
    let totalBus = 0;
    let arrayMember = memberOfFamilies.split(string);
    
    if(totalFamilies != arrayMember.length){
        return "Input must be equal count of family";
    }

    let totalMemberFamilies = arrayMember.reduce(function(a, b){
        return parseInt(a) + parseInt(b);
    }, 0);

    totalBus = Math.ceil(totalMemberFamilies / maximalMiniBus);

    return `Minimum bus required is : ${totalBus}`;
}

console.log(RequiredBus(5, '1 2 4 3 3'));
console.log(RequiredBus(8, '2 3 4 4 2 1 3 1'));
console.log(RequiredBus(5, '1 2'));
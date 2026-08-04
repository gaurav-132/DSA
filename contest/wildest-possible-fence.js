var maximumWidth = function(planks) {
    let largestWidth = 0;
    let map = {};

    for (let i = 0; i < planks.length; i++) {
        if(map[planks[i]]){
            map[planks[i]] += 1;
        }else{
            map[planks[i]] = 1
        }
    }
    
    for (let i = 0; i < planks.length; i++) {

        let target = planks[i];
        let width = 0;
        if(map[target]){
            width += map[target];
        }

        let consumeMap = {};

        for (let j = 0; j < planks.length; j++) {
            let check = target - planks[j];

            if(!consumeMap[planks[j]]){
                consumeMap[planks[j]] = 1
            } else {
                consumeMap[planks[j]] += 1

            }

            consumeMap[check] = !consumeMap[check] ? 1 : consumeMap[check] += 1;


            if(map[check] && consumeMap[check] == false){
                width += 1;
                consumeMap[check]
            }
        }

        if(largestWidth < width){
            largestWidth  =width;
        }
    }

    return largestWidth;
};

let  planks = [1,3,2,5,7,5,4,2,1];

console.log(maximumWidth(planks));
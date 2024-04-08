var mergeTwoLists = function (list1, list2) {
    let List = [];
    let i = 0;
    let j = 0;
    if(list1.length == 0)
    {
       List =list2;
    }
    while (i < list1.length && j < list2.length) {
        if (list1[i] <= list2[j]) {
            List.push(list1[i]);
            List.push(list2[j]);
        }
        else {
            List.push(list2[j])
            List.push(list1[i]);
        }
    
        i++;
        j++;

    }
    
    return List;


};

console.log(mergeTwoLists([], [0,4]));

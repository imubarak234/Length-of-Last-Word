var lengthOfLastWord = function(s) {
     let toArray = s.split(" ");
    let answer = 0;
    for(let x = toArray.length - 1; x >= 0; x--){
      if(toArray[x].length > 0){
        answer = toArray[x].length;
        break;
      }
    }
    return answer;
};

const judgeVegetable = function(vegetables,metric) {
  let max = 0, position = 0, i = 0;

  if(metric === 'redness') {
    for(i = 0; i < vegetables.length; i++) {
      if(vegetables[i].redness > max) {
        max = vegetables[i].redness;
        position = i;
      }
    }
  }
  return vegetables[position].submitter;
}

const smartGarbage = function (trash, bins) {
  if (bins[trash]) {
    bins[trash]++;
  }
  return bins;
};
smartGarbage('compost', { waste: 4, recycling: 2, compost: 5 });







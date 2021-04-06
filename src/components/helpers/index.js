export const getModels = (mobiles, brand) => {
  const filterdModels = mobiles
    .filter((mobile) => mobile.brand === brand)
    .map((mobile) => mobile.model);

  return filterdModels;
};

export const getMobiles = (mobiles, brand, model) => {
  const filteredMoblies = mobiles.filter((mobile) =>
    brand !== ""
      ? model !== ""
        ? mobile.brand === brand && mobile.model === model
        : mobile.brand === brand
      : mobile
  );
  function compare(a, b) {
    if (a.brand < b.brand) {
      return -1;
    }
    if (a.brand > b.brand) {
      return 1;
    }
    return 0;
  }

  return filteredMoblies.sort(compare);

  // return filteredMoblies;
};

export const getBarChartData = (mobiles) => {
  console.log("MOBILES", mobiles);

  const mobilesCount = {};
  mobiles.forEach((mobile) => {
    if (mobilesCount[mobile.year]) {
      mobilesCount[mobile.year]++;
    } else {
      mobilesCount[mobile.year] = 1;
    }
  });
  return {
    labels: Object.keys(mobilesCount),
    data: Object.values(mobilesCount),
  };
};

export const getPieChartData = (mobiles) => {
  const mobilesCount = {};
  mobiles.forEach((mobile) => {
    if (mobilesCount[mobile.brand]) {
      mobilesCount[mobile.brand]++;
    } else {
      mobilesCount[mobile.brand] = 1;
    }
  });
  return {
    labels: Object.keys(mobilesCount),
    data: Object.values(mobilesCount),
  };
};

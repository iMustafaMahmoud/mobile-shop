const initialState = {
  mobiles: [
    {
      model: "S6",
      brand: "Samsung",
      year: "2007",
      description: "This",
      dualSim: false,
      NFC: false,
      fourG: false,
      memory: "16GB",
      color: "white",
    },
    {
      model: "iphone6",
      brand: "Apple",
      year: "2005",
      description: "This is ",
      dualSim: false,
      NFC: false,
      fourG: false,
      memory: "32GB",
      color: "black",
    },
    {
      model: "iphone8",
      brand: "Apple",
      year: "2016",
      description: "This is ",
      dualSim: false,
      NFC: false,
      fourG: false,
      memory: "32GB",
      color: "black",
    },

    {
      model: "F11",
      brand: "OPPO",
      year: "2008",
      description: "This is my first mobile",
      dualSim: false,
      NFC: false,
      fourG: false,
      memory: "64GB",
      color: "gold",
    },
  ],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOBILE":
      return { ...state, mobiles: [...state.mobiles, action.payload] };
    default:
      return state;
  }
};

export default Reducer;

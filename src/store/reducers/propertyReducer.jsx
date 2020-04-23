const initState = {
  properties: [
    {
      advance: 10000,
      city: "Hassan",
      district: "Hassan",
      owner_id: 1,
      rent: 5000
    },
    {
      advance: 50000,
      city: "Vijayanagar",
      district: "Hassan",
      owner_id: 2,
      rent: 4000
    },
    {
      advance: 300000,
      city: "Vidya Nagar",
      district: "Hassan",
      owner_id: 3,
      rent: 2000
    },
    {
      advance: 40000,
      city: "Buvanahalli",
      district: "Hassan",
      owner_id: 4,
      rent: 3000
    }
  ]
};

const propertyReducer = (state = initState, action) => {
  return state;
};

export default propertyReducer;

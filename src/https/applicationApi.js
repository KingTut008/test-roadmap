export const loadApplicationApi = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: '1',
          formLat: 59.84660399,
          fromIng: 30.29496392,
          toLat: 59.82934196,
          toIng: 30.42423701,
        },
        {
          id: '2',
          formLat: 59.82934196,
          fromIng: 30.42423701,
          toLat: 59.82761295,
          toIng: 30.41705607,
        },
        {
          id: '3',
          formLat: 59.83567701,
          fromIng: 30.38064206,
          toLat: 59.84660399,
          toIng: 30.29496392,
        },
        {
          id: '4',
          formLat: 59.84660399,
          fromIng: 30.29496392,
          toLat: 59.82761295,
          toIng: 30.41705607,
        },
        {
          id: '5',
          formLat: 59.83567701,
          fromIng: 30.38064206,
          toLat: 59.84660399,
          toIng: 30.29496392,
        },
      ]);
    }, 1000);
  });
};

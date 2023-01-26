export const osrmApi = async (coord) => {
  return await fetch(`http://router.project-osrm.org/route/v1/driving/${coord}`).then((res) => res.json());
};

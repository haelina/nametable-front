import axios from "axios";

const baseUrl: string = "https://nametable-hs.herokuapp.com";

const DBConnection = {
  getAll: async () => {
    const result = await axios(`${baseUrl}/api/people`);
    return result.data;
  },
};

export default DBConnection;

import axios from "axios";
import Person from "./components/Person";

const baseUrl: string = "https://nametable-hs.herokuapp.com";

const DBConnection = {
  getAll: async () => {
    const result = await axios(`${baseUrl}/api/people`);
    return result.data;
  },
  getPerson: async (id: number) => {
    const result = await axios(`${baseUrl}/api/people/${id}`);
    return result.data;
  },
  addPerson: async ({ firstName, lastName, age }: Person) => {
    const result = await axios.post(`${baseUrl}/api/people`, {
      firstName,
      lastName,
      age,
    });
    return result.data;
  },
  deletePerson: async (id: number) => {
    const result = await axios.delete(`${baseUrl}/api/people/${id}`);
    return result.data;
  },
  modifyPerson: async (p: Person) => {
    const result = await axios.put(`${baseUrl}/api/people/${p.id}`, p);
    return result.data;
  },
};

export default DBConnection;

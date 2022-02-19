import Person from "./Person";

const sortArray = (arr: Person[], sortBy: string, order: string): Person[] => {
  let sorted = arr;
  switch (sortBy) {
    case "firstName": {
      sorted = arr.sort((a, b) => a.firstName.localeCompare(b.firstName));
      break;
    }
    case "lastName": {
      sorted = arr.sort((a, b) => a.lastName.localeCompare(b.lastName));
      break;
    }
    case "age": {
      sorted = arr.sort((a, b) => a.age - b.age);
      break;
    }
    default: {
      sorted = arr.sort((a, b) => a.firstName.localeCompare(b.firstName));
      break;
    }
  }
  if (order === "desc") {
    sorted.reverse();
  }

  return sorted;
};

export default sortArray;

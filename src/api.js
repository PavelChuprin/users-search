import { API_URL } from "./constants";

export const getUsers = async ({ searchValue, sort, perPage, page }) => {
  return fetch(
    API_URL +
      `users?q=${searchValue}&sort=repositories&order=${sort}&per_page=${perPage}&page=${page}`,
    {
      method: "GET",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  ).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    if (response.status === 304) {
      console.log("Not modified");
    }
    if (response.status === 304) {
      console.log("Validation failed, or the endpoint has been spammed.");
    }
    if (response.status === 503) {
      console.log("Service unavailable");
    }

    throw new Error("Неизвестная ошибка, попробуйте позже");
  });
};

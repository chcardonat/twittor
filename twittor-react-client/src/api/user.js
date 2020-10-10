import { API_HOST } from "../utils/constant";
import { getTokenApi } from "./auth";

export function getUserapi(id) {
  const url = `${API_HOST}/verperfil?id=${id}`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getTokenApi()}`,
    },
  };

  return fetch(url, params)
    .then((response) => {
      // eslint-disable-next-line no-throw-literal
      if (response.status >= 400) throw null;
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function uploadBannerApi(file) {
  const url = `${API_HOST}/subirBanner`;

  const formData = new FormData();
  formData.append("banner", file);
  console.log(formData);

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getTokenApi()}`,
    },
    body: file,
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

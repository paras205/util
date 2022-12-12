import jwt from "jsonwebtoken";

const getToken = () => {
  const token = localStorage.getItem("token");
  return jwt.decode(token);
};

export const checkRole = (role) => {
  if (role.includes(getToken()?.workspace)) return true;
  return false;
};

export const removeNull = function (arr) {
  let data = [];
  (arr || [])?.map((item) => {
    let obj = {};
    for (let i in item) {
      if (item[i] === "" || item[i] === null) {
        obj[i] = "";
      } else {
        obj[i] = item[i];
      }
    }
    data.push(obj);
  });
  return data;
};

export const changeToGroup = (rows) => {
  if (rows.length === 0 || !rows) {
    return [];
  }

  const data = rows.reduce(function (rv, x) {
    (rv[x.serviceGroup] = rv[x.serviceGroup] || []).push(x);
    return rv;
  }, {});
  let i = 0;
  const group = [];
  for (const key in data) {
    group.push({ bankingFeatures: key, data: data[key] });
    i++;
  }
  return group;
};

export const convertFormattedData = (data, Heading) =>
  data?.map((item, i) => {
    return Object.keys(Heading).reduce(
      (acc, key) => ({ ...acc, [key]: item?.[key] }),
      {}
    );
  });

export const convertToFormData = (values) => {
  let formdata = new FormData();
  for (let [key, value] of Object.entries(values)) {
    formdata.append(key, value);
  }
  return formdata;
};

export function filterFalseyValues(obj) {
  for (let propName in obj) {
    if (["", null, undefined].includes(obj[propName])) {
      delete obj[propName];
    } else if (
      obj[propName] instanceof Object &&
      Object.keys(obj[propName]).length
    ) {
      obj[propName] = filterFalseyValues(obj[propName]);
    }
  }
  return obj;
}

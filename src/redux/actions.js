//Redux Thunk АВТОРИЗАЦИЯ
export const startLogin = (login, password, navigate) => {
  return (dispatch) => {
    dispatch({ type: "auth/login/start" });

    fetch("http://localhost:4000/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login,
        password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.token) {
          dispatch({ type: "auth/login/error" });
        } else {
          localStorage.setItem("user", JSON.stringify(json));
          navigate("/contact");
          dispatch({
            type: "auth/login/success",
            payload: json,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: "auth/login/error",
        });
      });
  };
};

export const authReset = () => {
  localStorage.removeItem("user");
  return {
    type: "auth/reset",
  };
};

//Redux Thunk Получение контактов
export const ContactLoading = () => {
  return (dispatch) => {
    dispatch({ type: "contact/loading/start" });

    fetch("http://localhost:4000/contacts")
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "contact/loading/success",
          payload: json,
        });
      });
  };
};

export const ContactAdd = (contact) => {
  return (dispatch) => {
    dispatch({ type: "contact/add/start" });

    fetch("http://localhost:4000/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: contact,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "contact/add/success",
          payload: json,
        });
      });
  };
};
export const deleteContact = (contact, id) => {
  return (dispatch) => {
    dispatch({ type: "contact/delete/start" });

    fetch(`http://localhost:4000/contacts/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: contact,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "contact/delete/success",
          payload: id,
        });
      });
  };
};

export const setFilterText = (contact) => {
  return {
    type: "filter/set",
    payload: contact,
  };
};

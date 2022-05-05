import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import { startLogin } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function Auth(props) {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.logins.error);
  const loading = useSelector((state) => state.logins.loadingLogin);
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(login, password, navigate));
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="row justify-content-center align-items-center"
    >
      <div className="col-5 shadow px-5 py-3 rounded">
        <h2 className="m-2 text-center pb-3">Авторизация</h2>
        <div className="form-group m-2">
          <input
            type="text"
            className="form-control"
            placeholder="Введите логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <input
            type="password"
            className="form-control"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group m-2 text-center">
          {error && <Alert severity="error">Неверный логин или пароль</Alert>}
          <button
            className="btn btn-primary px-4"
            onClick={handleLogin}
            disabled={loading}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;

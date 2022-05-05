import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ContactAdd,
  ContactLoading,
  deleteContact,
  setFilterText,
} from "../redux/actions";
import ButtonAuth from "./ButtonAuth";
import styles from "../components/common/styles.module.scss";

function Contacts(props) {
  //БЕРЕМ ДАННЫЕ ИЗ СТЕЙТА И ИМПОРТИРУЕМ ИХ СЮДА ДАЛЕЕ РАБОТАЕМ С НИМИ
  const loading = useSelector((state) => state.people.loading);
  const Contact = useSelector((state) => state.people.contact);
  const LoadingContact = useSelector((state) => state.people.loadingContact);
  const filter = useSelector((state) => state.people.filter);
  const [contact, setContact] = useState("");

  //ДЕЛАЕМ ЗАПРОСЫ НА СЕРВЕР ДЛЯ ТЕХ ИЛИ ИНЫХ ДАННЫЕ
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ContactLoading());
  }, [dispatch]);
  const HandleClick = () => {
    dispatch(ContactAdd(contact));
    setContact("");
  };
  const DeleteClick = (id) => {
    dispatch(deleteContact(contact, id));
  };
  const filteredContact = Contact.filter(
    (contact) => contact.name.indexOf(filter) > -1
  );
  const handelChangeFilter = (event) => {
    dispatch(setFilterText(event.target.value));
  };

  return (
    <div>
      <ButtonAuth />
      <div className="row justify-content-center">
        <div className="col-6 mt-5">
          <div className="list-group mt-5">
            <div className="form-group mb-2 d-flex">
              <input
                className="form-control"
                placeholder="Add Contact"
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Search Contact"
                value={filter}
                onChange={handelChangeFilter}
              />
              <button
                className={`btn btn-primary ${styles.Button}`}
                onClick={HandleClick}
                disabled={LoadingContact}
              >
                Добавить
              </button>
            </div>

            {loading ? (
              <div>Loading is start</div>
            ) : (
              filteredContact.map((item) => {
                return (
                  <li className="list-group-item" key={item.id}>
                    {item.name}
                    <button
                      onClick={() => DeleteClick(item.id)}
                      className={styles.DeleteButton}
                      key={item.id}
                    >
                      ❌
                    </button>
                  </li>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

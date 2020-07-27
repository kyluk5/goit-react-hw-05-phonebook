import React from "react";
import PropTypes from "prop-types";
import style from "../FindContact/FindContact.module.css";

const FindContact = ({ filtered, filterValue, deleteContact }) => {
  return (
    <>
      {filtered.length > 1 && (
        <div className={style["search-container"]}>
          {/* <h3>Contacts</h3> */}
          <span>Find contacts by name</span>
          <br></br>
          <input type="text" onChange={filterValue}></input>
        </div>
      )}
      <div className={style["search_info"]}>
        <ul className={style["contact_list"]}>
          {filtered.map((item) => (
            <li className={style["contact_item"]} key={item.id}>
              {item.name} : {item.number}
              <button
                className={style["delete_btn"]}
                type="button"
                id={item.id}
                onClick={deleteContact}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FindContact;

FindContact.propTypes = {
  filtered: PropTypes.array.isRequired,
  filterValue: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

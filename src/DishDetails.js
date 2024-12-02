import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './DishDetails.module.css';

function DishDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve dish details from location state
  const dish = location.state?.dish;

  if (!dish) {
    return (
      <div className={styles.noDishSelected}>
        <h2>No Dish Selected</h2>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className={styles.dishDetailsContainer}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Back to Menu
      </button>
      <div className={styles.dishDetailsCard}>
        <img src={dish.image} alt={dish.name} className={styles.dishImage} />
        <h1 className={styles.dishName}>{dish.name}</h1>
        <p className={styles.dishCategory}>Category: {dish.category}</p>
        <p className={styles.dishprice}>Price {dish.price}</p>
        <p className={styles.dishDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum orci at felis ultrices, vel fringilla nulla lacinia.
          Suspendisse potenti.
        </p>
        <div className={styles.buttonsContainer}>
        <button className={styles.crudButtonsButton}>Add a New Dish</button>
        <button className={styles.crudButtonsButton}>Update Dish</button>
        <button className={styles.crudButtonsButton}>Delete Dish</button>
        <button className={styles.crudButtonsButton}>Mark as Special</button>
        <button className={styles.crudButtonsButton}>Mark as out of stcok</button>
        </div>
      </div>
    </div>
  );
}

export default DishDetails;

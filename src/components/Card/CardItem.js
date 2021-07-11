/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import classes from './styles.module.css'
import AOS from 'aos';
import "aos/dist/aos.css"

function CardItem(props) {
  useEffect(()=>{
    AOS.init(
     { 
       offset:100,
       duration:3000,
       easing:'ease'
     }
    );
    
  })
  return (
    <>
      <li className={classes.cards__item} data-aos={props.dataAos}>
        <Link className={classes.cards__item__link} to={props.path}>
          <figure className={classes.cards__item__pic_wrap} data-category={props.label}>
            <img
              className={classes.cards__item__img}
              alt={props.alt}
              src={props.src}
            />
          </figure>
          <div className={classes.cards__item__info}>
            <h2 className={classes.cards__item__text}><strong>{props.text}</strong></h2>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;

'use client'
import React from "react";
import styles from './About.module.css';
import { useState,useEffect } from "react";

export default function About(){
    const [typePokemon,setTypePokemon]=useState("Esperando ...");
    const [height,setHeight]=useState("Esperando ...");
    const [weight,setWeight]=useState("Esperando ...");
    const [abilities,setAbilities]=useState(["Esperando ..."]);
    const [hp,setHp]=useState("Esperando ...");
    const [attack,setAttack]=useState("Esperando ...");
    const [defense,setDefense]=useState("Esperando ...");
    const [speed,setSpeed]=useState("Esperando ...");
    const url="https://pokeapi.co/api/v2/pokemon/2";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setTypePokemon(data.types[0].type.name),
            setHeight(data.height),
            setWeight(data.weight),
            setAbilities(data.abilities[0].ability.name),
            setHp(data.stats[0].base_stat),
            setAttack(data.stats[1].base_stat),
            setDefense(data.stats[2].base_stat),
            setSpeed(data.stats[5].base_stat)
        })
    },[])
    var altura=height/10
    var peso=weight/10    
    return(
        <div className={styles["contenedor-about"]}>
            <h3>About</h3>
            <div className={styles["about"]}>
                <div className={styles["p-title"]}>
                    <p>Type</p>
                    <p>Height</p>
                    <p>Weight</p>
                    <p>abilities</p>
                </div>        
                <div className={styles["p-p"]}>
                    <p>{typePokemon}</p>
                    <p>{altura} m</p>
                    <p>{peso} kg</p>
                    <p>{abilities}</p>                
                </div>                    
            </div>
            <h3>Stats</h3>
            <div className={styles["about"]}>
                <div className={styles["p-title"]}>
                    <p>HP</p>
                    <p>Attack</p>
                    <p>Defense</p>
                    <p>Speed</p>
                </div>
                <div className={styles["p-p"]}>
                    <p>{hp}</p>
                    <p>{attack}</p>
                    <p>{defense}</p>
                    <p>{speed}</p>
                </div>
            </div>
            
        </div>
    );
};

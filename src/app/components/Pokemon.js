"use client"
import React from "react";
import { useState,useEffect } from "react";
import styles from './Pokemon.module.css'
import Image from "next/image";
export default function Pokemon(){
    const [fotopokemon,setFotoPokemon]=useState("/vercel.svg");    
    const [nombrepokemon,setNombrePokemon]=useState("Esperando nombre ...")
    const [idpokemon,setIdPokemon]=useState("Esperando id...")
    const url="https://pokeapi.co/api/v2/pokemon/2";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setFotoPokemon(data.sprites.front_default),
            setNombrePokemon(data.name),
            setIdPokemon(data.game_indices[6].game_index)
        })
    },[])
    return(
        <div className={styles["contenedor-pokemon"]}>
            <h1 className={styles["nombre-pokemon-principal"]}>My Pokemon</h1>
            <h1 className={styles["nombre-pokemon"]}>{nombrepokemon}</h1>
            <p className={styles["id-pokemon"]}>#0{idpokemon}</p>
            <Image src={fotopokemon} width={200} height={200}/>
        </div>
    )
}
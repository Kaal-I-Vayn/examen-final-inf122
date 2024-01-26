import React from "react";
import { useState,useEffect } from "react";
import style from './Pokemon.module.css'

export default function Pokemon(){
    const [fotopokemon,setFotoPokemon]=useState("/vercel.svg")
    const url="https://pokeapi.co/api/v2/pokemon/shiftry";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json)
        .then(data=>{setFotoPokemon(data.)})
    },[])
    return(
        <div>

        </div>
    )
}
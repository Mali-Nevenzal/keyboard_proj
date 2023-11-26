import React, {useState} from "react"

function languageState(language)
{
    if(setLanguage=="english")
    {
        setLanguage(prevState => {
            return {language:"english"}
        })
    }
    else  if(setLanguage=="hebrew")
    {
        setLanguage(prevState => {
            return {language:"hebrew"}
        })
    }
    else  if(setLanguage=="shift")
    {
        setLanguage(prevState => {
            return {language:"shift"}
        })
    }
}

function setKey(letter)
{
    if(setLanguage=="english")
    {
        setLanguage(prevState => {
            return {language:"english"}
        })
    }
    else  if(setLanguage=="hebrew")
    {
        setLanguage(prevState => {
            return {language:"hebrew"}
        })
    }
    else  if(setLanguage=="shift")
    {
        setLanguage(prevState => {
            return {language:"shift"}
        })
    }
}
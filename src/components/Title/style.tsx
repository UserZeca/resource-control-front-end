import styled from "styled-components";
import {DeviceSizes} from '../../constants/sizes'

export const Text = styled.h1`

    color: var(--white);
    font-family: 'HeadlinerNo.45';
    /* Sistema Controle de Recursos */
    font-style: normal;
    font-weight: 400;
    text-align: center;
    margin: 0px;

    @media (max-width: ${DeviceSizes.desktop}){
        font-size: 150px;
        line-height: 151px;
        height: 503px;
        width: 545px;
    }

    @media (max-width: ${DeviceSizes.laptopL}){
        font-size: 100px;
        line-height: 101px;
        height: 303px;
        width: 345px;
    }

    @media (max-width: ${DeviceSizes.laptop}){
        font-size: 70px;
        line-height: 70px;
        height: 243px;
        width: 285px;
    }

    
    @media (max-width: ${DeviceSizes.tablet}){
        font-size: 70px;
        line-height: 70px;
        height: 243px;
        width: 285px;
        color: var(--dark-navy-blue);
    }

    @media (max-width: ${DeviceSizes.mobileL}){
        font-size: 50px;
        line-height: 50px;
        width: 172px;
        height: 150px;
        color: var(--dark-navy-blue);
    }

    
    @media (max-width: ${DeviceSizes.mobileM}){
        font-size: 50px;
        line-height: 50px;
        width: 172px;
        height: 150px;
        color: var(--dark-navy-blue);
    }

    
    
    @media (max-width: ${DeviceSizes.mobileS}){
        font-size: 50px;
        line-height: 50px;
        width: 172px;
        height: 150px;
        color: var(--dark-navy-blue);
        
    }

`
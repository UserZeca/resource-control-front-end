import styled, { css } from "styled-components";
import { DeviceSizes } from "../../constants/sizes";
//#region Button

type ContainerProps = {
    backgroundColor?: string;
    border?: string;
    primary?: boolean;
    secundary?: boolean; 
    generic?: boolean;
    width?: string;
    height?: string; 
}

export const Button = styled.button<ContainerProps>`

     /* Rectangle 3 */
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: ${(props) => props.backgroundColor};
    border: 3px solid  ${(props) => props.border};
    border-radius: 50px;
    margin: 0px;

    ${props => 
        props.primary &&

        /* Azul marinho escuro
            Paleta de cores do sistema
        */
        css`
            background-color: var(--dark-gray);
            opacity: 0.5;
            border-color: var(--dark-navy-blue);
            width: 150px;
            height: 55px;
            
            &:hover{
                opacity: 1;
                cursor: pointer;

            }
        `
    }

    ${props => 
        props.secundary &&

        css`
            background: var(--dark-green);
            border: 3px solid var(--light-gray);
            width: 150px;
            height: 55px;


            &:hover{
                cursor: pointer;
                background-color: var(--dark-yellow);

            }
        `
    }

    ${props => 
        props.generic &&

        css`
            background: var(--dark-yellow);
            border: 3px solid var(--dark-green);
            width: 150px;
            height: 55px;

            &:hover{
                cursor: pointer;
            }
        `
    }
    
    @media (max-width: ${DeviceSizes.mobileS}){   
        width: 100px;
        height: 40px;
    }
`;

Button.defaultProps = {
    backgroundColor: 'black',
    border: 'white'

}

//#endregion Button

//#region ButtonContent
type LabelProps = {
    color?: string;
    primary?: boolean;
    secundary?: boolean;
    generic?: boolean;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    textAlign?: string;
    
}

export const ButtonContent = styled.div<LabelProps>`

    height: 35px;
    width: 120px;

    font-family: 'HeadlinerNo.45' ;
    font-weight: ${(props) => props.fontWeight};
    font-size:   ${(props) => props.fontSize};
    line-height: ${(props) => props.lineHeight};
    text-align:  ${(props) => props.textAlign};

    /* Azul marinho escuro */
    color: ${(props) => props.color};

    ${props => 
        props.primary &&

        /* Azul marinho escuro
            Paleta de cores do sistema
        */
        css`
            color: var(--dark-navy-blue);
            font-style: normal;
        `
    }

    ${props => 
        (props.secundary || props.generic ) &&

        /* Azul marinho escuro
            Paleta de cores do sistema
        */
        css`
            color: var(--white);
            font-style: normal;
        `
    }

    

`;

ButtonContent.defaultProps = {
    children: "Button",
    color: 'white',
    fontSize: '34px',
    fontWeight: '400px',
    lineHeight: '34px',
    textAlign: 'center',

}

//#endregion ButtonContent
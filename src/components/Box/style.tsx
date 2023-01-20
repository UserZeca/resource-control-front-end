import styled, {css} from "styled-components";
import { DeviceSizes } from "../../constants/sizes";

type ContainerProps = {
    width?: string;
    height?: string;
    flexDirection?: string;
    backgroundColor?: string;
    borderSize?: string; 
    borderType?: string;
    borderColor?: string;
    auto?: boolean;
}

export const Container = styled.div<ContainerProps>`

    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    flex-direction: ${(props) => props.flexDirection};

    width: ${(props) => props.width};
    height: ${(props) => props.height};
    
    background-color: ${(props) => props.backgroundColor};
    border-width: ${(props) => props.borderSize} ;
    border-style: ${(props) => props.borderType};
    border-color: ${(props) => props.borderColor};
    box-sizing: border-box;
    

    ${props => 
        props.auto &&

        css`

            background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), rgba(30, 48, 31, 0.7);
            border: 2px solid var(--dark-navy-blue);
            

            @media (min-width: ${DeviceSizes.desktop}) {
                width: 580px;
                height: 720px;
            }
        
            @media (max-width: ${DeviceSizes.desktop}) {
                width: 480px;
                height: 520px;
            }
        
            @media (max-width: ${DeviceSizes.mobileL}) {
                width: 358px;
                height: 578px;
            }

            @media (max-width: ${DeviceSizes.mobileM}) {
                width: 358px;
                height: 578px;
            }

            @media (max-width: ${DeviceSizes.mobileS}) {
                width: 258px;
                height: 478px;
            }

        `
}

`;

Container.defaultProps = {

    width: '40px',
    height: '40ox',
    backgroundColor: 'black',
    borderColor: 'white',
    borderType: 'solid',
    borderSize: '2px',
    flexDirection: 'row'   
}
import styled from "styled-components";

type ContainerProps = {
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderSize?: string; 
    borderType?: string;
    borderColor?: string;
}

export const Container = styled.div<ContainerProps>`

    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundColor};
    border-width: ${(props) => props.borderSize} ;
    border-style: ${(props) => props.borderType};
    border-color: ${(props) => props.borderColor};

`;

Container.defaultProps = {

    width: '40px',
    height: '40ox',
    backgroundColor: 'black',
    borderColor: 'white',
    borderType: 'solid',
    borderSize: '2px',

}
import styled from "styled-components";

type TextProps = {

    color?: string;
    fontSize?: string;
    fontWeight?: string;
    textAlign?: string;    
}

export const Text = styled.p<TextProps>`

    color: ${(props) => props.color};
    font-family: 'HeadlinerNo.45';
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    font-style: normal;
    text-align: ${(props) => props.textAlign};
    margin: 0px;


`;

Text.defaultProps = {

    color: 'var(--white)',
    fontSize: '18px',
    fontWeight: '400px',
    textAlign: 'center'
}
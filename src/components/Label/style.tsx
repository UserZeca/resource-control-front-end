import styled from "styled-components";

type TextProps = {
    color?: string
}

export const Text = styled.label<TextProps>`
    color: ${(props) => props.color}
`;

Text.defaultProps = {

    color: 'var(--white)'

};
import {Container, Label } from './style'

type ButtonProps = {
    text?: string;
    backgroundColor?: string;
    color?: string;
    border?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    textAlign?: string;
    width?: string;
    height?: string; 
    primary?: boolean;
    secundary?: boolean;
    generic?: boolean;
}

export function Button(props: ButtonProps){
    return (
       <Container backgroundColor={props.backgroundColor}
                    border={props.border}
                    primary={props.primary}
                    secundary={props.secundary}
                    generic={props.generic}
                    width={props.width}
                    height={props.height}
        >
            <Label primary={props.primary}
                    secundary={props.secundary}
                    color={props.color}
                    fontWeight={props.fontWeight}
                    fontSize={props.fontSize}
                    lineHeight={props.lineHeight}
                    textAlign={props.textAlign}
            >
                {props.text}
            </Label>
        </Container>
    );
}
import { Container } from "./style";


type BoxProps = {
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderSize?: string; 
    borderType?: string;
    borderColor?: string;
    children?: any;
}

export function Box(props: BoxProps){

    return (

        <Container width={props.width}
                    height={props.height}
                    backgroundColor={props.backgroundColor}
                    borderSize={props.borderSize}
                    borderType={props.borderType}
                    borderColor={props.borderColor}
        >
            {props.children}
        </Container>

    );

}
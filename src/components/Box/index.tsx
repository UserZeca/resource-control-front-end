import { Container } from "./style";


type BoxProps = {
    width?: string;
    height?: string;
    flexDirection?: string;
    backgroundColor?: string;
    borderSize?: string; 
    borderType?: string;
    borderColor?: string;
    children?: any;
    auto?: boolean;
    id?: string;
    className?: string
}

export function Box(props: BoxProps){

    return (

        <Container width={props.width}
                    height={props.height}
                    flexDirection={props.flexDirection}
                    backgroundColor={props.backgroundColor}
                    borderSize={props.borderSize}
                    borderType={props.borderType}
                    borderColor={props.borderColor}
                    auto={props.auto}
                    id={props.id}
                    className={props.className}
        >
            {props.children}
        </Container>

    );

}
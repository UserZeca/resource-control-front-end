import {Text} from './style'

type LabelProps = {

    children?: string;
    htmlFor?: string;
    className?: string;

}

export function Label(props:LabelProps){

    return(
        
        <Text htmlFor={props.htmlFor}
                className={props.className}
        >
            {props.children}
        </Text>

    )

}
import {Text} from './style';

type SubTitleProps = {

    children?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    textAlign?: string;     

}

export function SubTitle(props: SubTitleProps){

    return (
        <Text color={props.color}
                fontSize={props.fontSize}
                fontWeight={props.fontWeight}
                textAlign={props.textAlign}        
        >
            {props.children}
        </Text>
    );
}
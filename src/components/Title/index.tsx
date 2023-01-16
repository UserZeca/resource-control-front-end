import {Text} from './style';

type TitleProps = {

    children?: string;

}

export function Title(props: TitleProps){

    return (
        <Text>
            {props.children}
        </Text>
    );
}
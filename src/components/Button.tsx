type ButtonProps = {
    text?: string;
}

export function Button(props: ButtonProps){
    return (
        <div>{props.text}</div>
    );
}
function FloatingButton(props){
    const {Data} = props;

    return(
        <a id="Whatsapp"  className="sombra" href={Data.Whatsapp} target="_blank">
            <img
            src="https://static.vecteezy.com/system/resources/thumbnails/024/273/818/small/whatsapp-logo-free-png.png" 
            className="bounce"/>
        </a>
    )
}

export default FloatingButton;
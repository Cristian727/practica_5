function randomEmoji(){
    const emojis = ["😀","​😃","​😄","​😁","​😆","​😅","​🤣","🙂​","😂​","🙃​","🥳​","🤔​","😲​","💩​","😈​","🎃​","👻​","👺​","🎮​","⚽​","🙏​","👀​","🧙🏻​","👍🏼​","🤏🏼​","👌🏼​","🤟🏼​","🖖🏼​","🙏🏼​","👐🏼​","🤙🏼​","🧛🏼​","👨🏼‍✈️​","👨🏼‍🦯​","🧜🏼‍♀️​","🐱​","🐮​","🐭​","🐵​","🐌​","🐸​","🐍​","🐳​","🐫​","🦂​"]
    //Generar un numero aleatorio entre 0 y la longitud del array emojis
    const randomNumber = Math.floor(Math.random() * emojis.length)
    const emoji_aleatorio = emojis[randomNumber]
    document.querySelector("#emoji").innerHTML = emoji_aleatorio

}
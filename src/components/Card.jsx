import React from "react"
import "./response.css"

const Card=(props)=>{

return(
<div className="display_responses">
        <div className="Questions"><h2>{props.question}</h2></div>
        <div className="Answer"><h2>{props.answer}</h2></div>
</div>
)
}
export default Card;
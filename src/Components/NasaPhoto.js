import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
background-color: grey;
p {
    color: lemonchiffon;
}
h3 {
    color: lemonchiffon;
}
.date {
    font-style: italic;
}
`

const NasaPhoto = (props) => {
    console.log(props)
    return (
        <StyledDiv >
            <div className="nasa-photo-wrapper">
                <h3>{props.photo.title}</h3>
                <p className="date">{props.photo.date}</p>
                <img src={props.photo.hdurl} />
                <p className="explanation">{props.photo.explanation}</p>
            </div>
        </StyledDiv>
    )
}

export default NasaPhoto
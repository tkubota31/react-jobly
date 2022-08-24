import React from "react"

function Alert({ type = "danger", messages =[]}){

    return (
        <div>
            {messages.map(err =>(
                <p>
                    {err}
                </p>
            ))}
        </div>
    );
}

export default Alert

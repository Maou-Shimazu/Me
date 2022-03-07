import * as React from "react";
let header = "../../assets/maou.jpg"

export default class HeaderComponent extends React.Component<{}> {
    render() {
        return (
            <div>
                <img width="100%" src={header} />
            </div>
        );
    }

}
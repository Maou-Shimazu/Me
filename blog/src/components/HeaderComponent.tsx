import * as React from "react";
let header = "../../assets/Bg.svg"
// commit

export default class HeaderComponent extends React.Component<{}> {
    render() {
        return (
            <div>
                <img width="100%" src={header} />
            </div>
        );
    }

}
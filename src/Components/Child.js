import React, {Component} from "react";

class Child extends Component {

    addValueChild() {
        this.props.add(10); //from children to parent
    }

    render () {
        return (
            <div>
            {this.props.pval}  {/* from parent to child */}
                <button onClick={this.addValueChild.bind(this)}>
                    ADD
                </button>
            </div>
        );
    }
}

export default Child;
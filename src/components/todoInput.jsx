import React, { Component } from 'react';

class TodoInput extends Component {

    state = {
        // to store input value of todo list
        inpVal: {title: '', body: ''}
    }

    updateInputValue(evt) {
        this.setState({
            inpVal: { title: evt.target.value, body: this.state.inpVal.body }
        });
    }

    updateInputValue2(evt) {
        this.setState({
            inpVal: { title: this.state.inpVal.title, body: evt.target.value }
        });
    }



    render() { 

        return ( 
            <div className="col-4 ml-4 mt-4">
                <div className="input-group">
                    <span className="input-group-text">
                        Enter Title
                    </span>
                    <input type="text" className="form-control" value={this.state.inpVal.title} onChange={evt => this.updateInputValue(evt)}/>
                </div>

                <div className="input-group">
                    <span className="input-group-text">
                        Enter<br/> Description
                    </span>
                    <textarea type="text" className="form-control" rows="4" value={this.state.inpVal.body} onChange={evt => this.updateInputValue2(evt)}/>
                    <button onClick={() => this.props.onSubmit({title: this.state.inpVal.title, body: this.state.inpVal.body})} className="btn btn-outline-secondary">Create</button>
                </div>
                {/* Takes current state's inpVal obj and passes it on to parent App.js to handle */}
                

            </div>
        );
    }
}
 
export default TodoInput;
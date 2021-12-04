import React, { Component } from 'react'

class CRUD extends Component {

    state = {
        jobs: ['TestA', 'TestB', 'TestC'],
        jobField: ""
    }

    handleFieldChange = (e) => {
        this.setState({
            jobField: e.target.value
        })
        console.log(this.state.jobField)
    }

    handleRemoveJob = (index) => {
        this.setState(prevState => ({     	
            jobs: prevState.jobs.filter((job, i) => i !== index)     
        }));
    }

    handleClickAdd = () => {
        this.setState(prevState => ({
            jobs: [...prevState.jobs, this.state.jobField],
            jobField: ''
        })) 
    }

    render() {

        return (
            <div>
                <div>test</div>
                <div >
                    {this.state.jobs.map((job, index) =>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div key={index}>{job}</div>
                            <div onClick={() => this.handleRemoveJob(index)}>X</div>
                        </div>
                        
                    )}
                </div>
                <input onChange={this.handleFieldChange} value={this.state.jobField}/>
                <div>
                    <button>
                        <span onClick={this.handleClickAdd}>Add</span>
                    </button>
                </div>
            </div>

        )
    }
}

export default CRUD
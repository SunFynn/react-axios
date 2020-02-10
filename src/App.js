import React, { Component } from 'react';
import "./mock/mock.js"
import axios from "axios"

export default class App extends Component {
	constructor(){
		super();
		this.state={
			data:[]
		}
	}
	handdleClick=()=>{
		axios.get("data.php")
		.then(res=>{
			this.setState({
				data:res.data.data
			})
		})
		.catch(e=>{
            console.log(e.message)
		})
	}
	render() {
		let {handdleClick}=this;
		let {data}=this.state
		return (
			<div>
				<ul>
					{
						data.map(value=>{
							return <li>id:{value.id},name:{value.age},age:{value.age},sex:{value.sex}</li>
						})
					}
				</ul>
				<button onClick={handdleClick}>点击获取数据</button>
			</div>
		)
	}
}

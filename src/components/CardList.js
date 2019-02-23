import React from 'react';
import Card from './Card.js';

const CardList = ({ robots  }) => {
	if(false) {
		throw new Error('NOOOOOO!')
	}
	return (
		<div>
			{
				robots.map((user, id) => {
					return (<Card 

							key   = {id}
							id    = {robots[id].id} 
							name  = {robots[id].name} 
							email = {robots[id].email}  
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;
import logo from '../assets/logo.svg';
import "../sass/components/_togglemenu.scss"
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
function ToggleMenu(props) {
	const [isAdding, setIsAdding] = useState(false)
	async function handleNewDocument(){
		setIsAdding(true)
		const defaultText = {
    		"title":"new-document.md",
    		"content": "Start Typing!"
}
		const response = await fetch('https://fair-ruby-chimpanzee-wig.cyclic.app/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(defaultText),
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const json = await response.json();
		props.setDocuments((prevDocuments) => [...prevDocuments, json]);
		toast("New Document Created")
		setIsAdding(false)


	}



	

	
return (
	<>
		<Toaster />
		<div
			className={`toggle-menu`}
			style={{ display: props.isToggleActive ? 'flex' : 'none' }}
		>
			<img className='toggle-menu-logo' src={logo}></img>
			<h3>My Documents</h3>
			<button onClick={handleNewDocument}>
				{isAdding ? 'Creating...' : '+ New Document'}
			</button>
			<section>
				{props.documents ? (
					props.documents
				) : (
					<p className='error'>
						No Documents Found: Connection to Server Error
					</p>
				)}
			</section>
		</div>
	</>
);
}

export default ToggleMenu;
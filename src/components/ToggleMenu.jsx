// Toggle Menu Imports
import logo from '../assets/logo.svg';
import "../sass/components/_togglemenu.scss"
import toast, { Toaster } from 'react-hot-toast';
function ToggleMenu(props) {
	async function handleNewDocument(){
		const defaultText = {
    		"title":"new-document.md",
    		"content": "Start Typing!"
}
		const response = await fetch('http://localhost:4000/api/documents/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(defaultText),
		});
		if (!response.ok) {
			// handle error
			return;
		}
		const json = await response.json();
		props.setDocuments((prevDocuments) => [...prevDocuments, json]);
		toast("New Document Created")


	}



	

	
return (<>
	<Toaster
	/>
	<div
		className={`toggle-menu`}
		style={{ display: props.isToggleActive ? 'flex' : 'none' }}
	>
		<img className='toggle-menu-logo' src={logo}></img>
		<h3>My Documents</h3>
		<button onClick={handleNewDocument}>+ New Document</button>
		<section>
			{props.documents ? (
				props.documents
			) : (
				<p className='error'>No Documents Found: Connection to Server Error</p>
			)}
		</section>
	</div>
</>);
}

export default ToggleMenu;
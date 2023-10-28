// Toolbar Imports
import menu from '../assets/icon-menu.svg';
import document from '../assets/icon-document.svg';
import close from '../assets/icon-close.svg';
import deleteimg from '../assets/icon-delete.svg';
import save from '../assets/icon-save.svg';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

function Toolbar(props) {
	const [isSaving, setIsSaving] = useState(false)

	function setNewContext(){
		if(props.documents.length === 0){

		}
		props.setCurrentTitle("");
		props.setCurrentContent("")
		props.setCurrentId("")
		

	}

	const handleDocumentDelete = async (id) => {
		const response = await fetch(`https://fair-ruby-chimpanzee-wig.cyclic.app/${id}`, {
			method: 'DELETE',
		});
		props.setDocuments((orginalDocuments)=>{
			return orginalDocuments.filter((document)=> document._id !== id)
		});
		setNewContext()
		

		toast('Document Deleted ✔️');
	};

	function handleTitleChange(e){
		props.setCurrentTitle(e.target.value)

	}


async function handleDocumentSave(id) {
	setIsSaving(true)
	const edit = {
		title: props.currentTitle,
		content: props.currentContent,
	};
	const response = await fetch(`https://fair-ruby-chimpanzee-wig.cyclic.app/${id}`, {
		method: 'PATCH',
		body: JSON.stringify(edit),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	props.setDocuments((prevDocuments) => {
		return prevDocuments.map((document) => {
			if (document._id === id) {
				return {...document, title: edit.title, content: edit.content};
			} else {
				return document;
			}
		});
	});
	toast('Document Saved ✔️');
	setIsSaving(false)
}

return (<>
<Toaster/>
	<div className='toolbar'>
		<div className='menu'>
			<img
				src={props.isToggleActive ? close : menu}
				onClick={props.onToggleClick}
			/>
		</div>
		<div className='toolbar--info'>
			<img src={document} />
			<input
				type='text'
				value={props.currentTitle}
				onChange={handleTitleChange}
			/>
		</div>
		<img
			src={deleteimg}
			className='delete'
			onClick={() => handleDocumentDelete(props.id)}
		/>
		<div className='save' onClick={() => handleDocumentSave(props.id)}>
			<img src={save}/>
			<p>{isSaving ? "Saving..." : "Save Changes"  }</p>
		</div>
	</div>
</>);
}
;


export default Toolbar;
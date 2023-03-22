// Toolbar Imports
import menu from '../assets/icon-menu.svg';
import document from '../assets/icon-document.svg';
import close from '../assets/icon-close.svg';
import deleteimg from '../assets/icon-delete.svg';
import save from '../assets/icon-save.svg';
import toast, { Toaster } from 'react-hot-toast';

function Toolbar(props) {

	function setNewContext(){
		if(props.documents.length === 0){

		}
		props.setCurrentTitle(props.documents[0].title);
		props.setCurrentContent(props.documents[0].content)
		props.setCurrentId(props.documents[0].id)

	}

	const handleDocumentDelete = async (id) => {
		const response = await fetch(`https://markdown-api.onrender.com/${id}`, {
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
	const edit = {
		title: props.currentTitle,
		content: props.currentContent,
	};
	const response = await fetch(`https://markdown-api.onrender.com/${id}`, {
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
		</div>
	</div>
</>);
}
;


export default Toolbar;
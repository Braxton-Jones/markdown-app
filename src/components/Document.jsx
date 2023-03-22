import "../sass/components/_document.scss";
import document from '../assets/icon-document.svg';

function Document(props){
	// Format incoming timestamp from DB
	const date = new Date(props.timeStamp);
	const options = {
		weekday: 'short',
		year: '2-digit',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	};

return (
<div className={`document ${props.isActive ? 'active' : ''}`} onClick={props.onDocumentClick}>
	<img src={document}/>
	<div >
		<p className="document-time">{` Last Updated On ` + date.toDateString('en-US', options)}</p>
		<p className="document-title">{props.title}</p>
	</div>

</div>
);
}

export default Document
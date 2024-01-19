import ReactMarkdown from 'react-markdown';
import { useEffect,useRef} from 'react';
import { gsap } from 'gsap/gsap-core';

function Editor(props) {
const editorRef = useRef(null)
function handleContentChange(e){
props.setCurrentContent(e.target.value)
}
useEffect(() => {
	if(props.isToggleMenuActive){
		gsap.to(editorRef.current, {
			duration: 0.1, 
			x: 0,
			
		})
	} else{
		gsap.to(editorRef.current, {
			duration: 0.4, 
			x: -250,
		})
	
	}

},[props.isToggleMenuActive])

	return (
		<section className='editor'>
			<div className='editor-mobile'>
				{props.isPreviewActive ? (
					<div className='editor-markdown'>
						<textarea value={props.currentContent} onChange={handleContentChange}  />
					</div>
			
				) : (
					<ReactMarkdown
						children={props.currentContent}
						className={'editor-preview'}
						breaks={true}
					/>
				)}
			</div>

			<div className={`editor-split ${props.toggleFullScreen ? "fullscreen" : "notfullscreen"}`}>
				<div className='editor-markdown'>
					<textarea value={props.currentContent} onChange={handleContentChange} />
				</div>
				<ReactMarkdown
					children={props.currentContent}
					className={'editor-preview'}
					breaks={true}
				/>
			</div>
		</section>
	);
}
export default Editor;

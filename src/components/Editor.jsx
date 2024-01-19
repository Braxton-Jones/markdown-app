import ReactMarkdown from 'react-markdown';
import { useEffect,useRef} from 'react';
import { gsap } from 'gsap';

function Editor(props) {
const editorRef = useRef(null)
function handleContentChange(e){
props.setCurrentContent(e.target.value)
}


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

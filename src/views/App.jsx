import '../sass/app.scss';
import { useState, useEffect} from 'react';
import Document from '../components/Document';
import ToggleMenu from '../components/ToggleMenu';
import Toolbar from '../components/Toolbar';
import Editor from '../components/Editor';
import show from '../assets/icon-show-preview.svg';
import hide from '../assets/icon-hide-preview.svg';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
const [documents, setDocuments] = useState([]);

useEffect(() => {
	const fetchDocuments = async () => {
		const response = await fetch('https://fair-ruby-chimpanzee-wig.cyclic.app/');
		const json = await response.json();
		setDocuments(json);
	};

	fetchDocuments();
}, []);



const [currentContent, setCurrentContent] = useState(`# Welcome to Markdown

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.

## How to use this?

1. Write markdown in the markdown editor window
2. See the rendered markdown in the preview window


Our project uses the free plan from render.com, 
which may result in longer loading times, 
especially after periods of inactivity. 
We appreciate your understanding and patience.
`);
	const [currentTitle, setCurrentTitle] = useState('welcome.md');
	const [currentId, setCurrentId] = useState('');
	const [toggleMenu, setToggleMenu] = useState(false);
	const [togglePreview, setTogglePreview] = useState(false);
	const [toggleFullScreen, setToggleFullScreen] = useState(true);
	const [isActiveDoc, setActiveDoc] = useState(false) // TODO: Add this


	// Toggles Toggle Menu
	function handleToggleClick() {
		setToggleMenu(!toggleMenu); 
	}

	// Toggles Mobile Preview
	function handlePreviewToggle() {
		setTogglePreview(!togglePreview);
	}

	function handlePreviewFullScreen() {
		setToggleFullScreen(!toggleFullScreen);
	}
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<main className='app'>
							<section className='app-wrapper'>
								<ToggleMenu
									documents={
										documents &&
										documents.map((document) => (
											<Document
												title={document.title}
												content={document.content}
												id={currentId}
												key={document._id}
												isActive={document._id === currentId}
												onDocumentClick={() => {
													setCurrentContent(document.content);
													setCurrentTitle(document.title);
													setCurrentId(document._id);
													setActiveDoc(!isActiveDoc);
												}}
												timeStamp={document.updatedAt}
											/>
										))
									}
									isToggleActive={toggleMenu}
									setDocuments={setDocuments}
								/>
								<div className='wrapper'>
									<section>
										<Toolbar
											currentTitle={currentTitle}
											setCurrentContent={setCurrentContent}
											setCurrentId={setCurrentId}
											documents={documents}
											currentContent={currentContent}
											setCurrentTitle={setCurrentTitle}
											onToggleClick={handleToggleClick}
											isToggleActive={toggleMenu}
											id={currentId}
											setDocuments={setDocuments}
											setActiveDoc={setActiveDoc}
										/>
										<div className='user-mode'>
											<div className='user-mode-mobile'>
												<h2>{togglePreview ? `Markdown` : `Preview`}</h2>
												<img
													src={togglePreview ? hide : show}
													onClick={handlePreviewToggle}
												/>
											</div>

											<div
												className={`user-mode-desktop ${
													toggleFullScreen ? '' : 'fullscreen'
												}`}
											>
												{toggleFullScreen ? (
													<>
														<h2>Markdown</h2>
														<div>
															<h2>Preview</h2>
															<img
																src={togglePreview ? hide : show}
																onClick={handlePreviewFullScreen}
															/>
														</div>
													</>
												) : (
													<>
														<div>
															<h2>Preview</h2>
															<img
																src={togglePreview ? hide : show}
																onClick={handlePreviewFullScreen}
															/>
														</div>
													</>
												)}
											</div>
										</div>
									</section>
									<Editor
										currentContent={currentContent}
										setCurrentContent={setCurrentContent}
										isPreviewActive={togglePreview}
										onToggleFullScreen={setToggleFullScreen}
										toggleFullScreen={!toggleFullScreen}
									/>
								</div>
							</section>
						</main>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

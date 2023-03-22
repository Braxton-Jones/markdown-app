import Document from './components/Document';
import ToggleMenu from './components/ToggleMenu';
import Toolbar from './components/Toolbar';
import Editor from './components/Editor';
import show from './assets/icon-show-preview.svg';
import hide from './assets/icon-hide-preview.svg';
function Home(props) {
	return (
		<main className='app'>
			<section className='app-wrapper'>
				<ToggleMenu
					documents={
						documents &&
						documents.map((document) => (
							<Document
								title={document.title}
								content={document.content}
								id={document.id}
								onDocumentClick={() => {
									setCurrentContent(document.content);
									setCurrentTitle(document.title);
								}}
							/>
						))
					}
					isToggleActive={toggleMenu}
				/>
				<div className='wrapper'>
					<section>
						<Toolbar
							currentTitle={currentTitle}
							onToggleClick={handleToggleClick}
							isToggleActive={toggleMenu}
						/>
						<div className='user-mode'>
							<h2>{togglePreview ? `Markdown` : `Preview`}</h2>
							<img
								src={togglePreview ? hide : show}
								onClick={handlePreviewToggle}

							/>
						</div>
					</section>
					<Editor
						currentContent={currentContent}
						isPreviewActive={togglePreview}
					/>
				</div>
			</section>
		</main>
	);
}

export default Home();

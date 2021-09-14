import html2canvas from 'html2canvas';
import { useState } from 'react';
import './App.css';

function App() {
	const [line1, setLine1] = useState('');
	const [line2, setLine2] = useState('');
	const [imagen, setLImg] = useState('');

	const handleOnchange1 = ({ target }) => {
		setLine1(target.value);
	};
	const handleOnchange2 = ({ target }) => {
		setLine2(target.value);
	};
	const handleOnchangeImg = ({ target }) => {
		setLImg(target.value);
	};

	const handleBtnExport = () => {
		html2canvas(document.querySelector('#meme')).then((canvas) => {
			var img = canvas.toDataURL('image/png');
			var link = document.createElement('a');
			link.download = `meme-${imagen}.png`;
			link.href = img;
			link.click();
		});
	};

	return (
		<div className="App">
			<h3 className="mt-4 mb-4 text-center">Generador de memes</h3>
			<p className=" mb-2">Selecciona tu background:</p>
			<select onChange={handleOnchangeImg}>
				<option value="fire">Casa en llamas</option>
				<option value="futurama">Futurama</option>
				<option value="history">History Channel</option>
				<option value="matrix">Matrix</option>
				<option value="philosoraptor">Philosoraptor</option>
				<option value="smart">Smart Guy</option>
			</select>
			<br />
			<div>
				<input
					type="text"
					name="linea1"
					placeholder="Linea 1"
					onChange={handleOnchange1}
					autoComplete="off"
					className="form-control"
					disabled={!imagen}
				/>

				<br />
				<input
					type="text"
					name="linea2"
					placeholder="Linea 2"
					onChange={handleOnchange2}
					autoComplete="off"
					className="form-control"
					disabled={!imagen}
				/>
			</div>

			<br />

			{line1 === '' && line2 === '' ? (
				<button className="btn btn-success " disabled>
					Escribe un texto en la linea 1 o 2 para guardar
				</button>
			) : (
				<button className="btn btn-success " onClick={handleBtnExport}>
					Guardar meme
				</button>
			)}
			{imagen !== '' ? (
				//para desarrollo en local usar /img-memes/${imagen}.jpg
				<div
					id="meme"
					style={{
						backgroundImage: `url("../meme-generator-app/img-memes/${imagen}.jpg")`,
					}}
				>
					<div className="line-1">
						<span>{line1}</span>
					</div>
					<div className="line-2">
						<span>{line2}</span>
					</div>
				</div>
			) : (
				<p className="mt-5 text-center">"Ningun background seleccionado"</p>
			)}
		</div>
	);
}

export default App;

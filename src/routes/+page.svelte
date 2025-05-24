<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Details from '$lib/components/Details.svelte';

	import { datosCompartidos } from '$lib/stores.js';
		import data from '$lib/data.json';

		let modeloSeleccionado = data[0];

		function seleccionarModelo(idx) {
			modeloSeleccionado = data[idx];

			// Envía el modelo seleccionado al store
			datosCompartidos.set(modeloSeleccionado);
		}
</script>

<Header></Header>

	<main class="hero">
		<section class="hero__container">
			<div class="hero__background">
				<video class="hero__video" muted autoplay loop>
					<source src="videos/video_fondo.mp4" type="video/mp4" />
				</video>
				<img class="hero__logo" src="taycan_logo.svg" alt="Logo de Porsche Taycan" />
				<div class="hero__car">
					<img
						class="hero__img--car"
						src={modeloSeleccionado.imagenModelo}
						alt={modeloSeleccionado.nombre}
					/>
				</div>

				<div class="hero__selector">
					<div class="hero__buttons">
						{#each data as modelo, idx}
							<button
								class="hero__button {modeloSeleccionado.id === modelo.id ? 'active' : ''}"
								on:click={() => seleccionarModelo(idx)}
							>
								{modelo.nombre.replace('Taycan ', '')}
							</button>
						{/each}
					</div>

					<div class="hero__details">
						<div class="hero__features">
							<h2 class="hero__h2">{modeloSeleccionado.nombre}</h2>
							<div class="hero__pill">
								<p>Eléctrico</p>
							</div>
							<div class="hero__price">
								<p class="hero__p--price">{modeloSeleccionado.precio}</p>
							</div>
						</div>

						<div class="hero__config">
							<button class="hero__button--cta"> Cambiar modelo </button>
							<button class="hero__button--config"> Configurar </button>
							<button class="hero__button--config"> Compra vehículos nuevos y de ocasión </button>
						</div>
						<div class="hero__legal">
							<p class="hero__p">{modeloSeleccionado.legal}</p>
							<p class="hero__p">
								1 P.V.P. recomendado para península y Baleares. Incluye transporte, I.V.A. e
								impuesto de matriculación (IEDMT) calculado al tipo estatal aplicable según las
								emisiones de CO2 del vehículo. El IEDMT puede variar en función de la Comunidad
								Autónoma donde se ubique su domicilio. Los precios aquí reflejados pueden sufrir
								modificaciones, y por tanto no son vinculantes.
							</p>
						</div>
					</div>
					<Details></Details>
				</div>
			</div>
		</section>
		
	</main>

<Footer></Footer>

<style>
	.hero {
		width: 100vw;
		position: relative;
		top: 0px;
		left: 0px;
		overflow-x: hidden;
	}

	.hero__background {
		position: relative;
		top: 0px;
		left: 0px;
	}

	.hero__logo {
		position: relative;
		top: -15vw;
		left: 50%;
		transform: translateX(-50%);
		width: clamp(250px, 47vw, 680px);
		z-index: -1;
	}

	.hero__video {
		position: relative;
		top: 0;
		left: 0;
		z-index: -100;
		object-fit: cover;
		min-width: 100vw;
		height: clamp(250px, 56vw * 9 / 16, 550px);
	}

	.hero__car {
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		top: -18vw;
	}

	.hero__img--car {
		width: clamp(280px, 67%, 900px);
	}

	.hero__selector {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		flex-direction: column;
		/* top: clamp(-25%, -40vw, -35%); */
		top: -15vw;
	}

	.hero__buttons {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: clamp(0.5rem, 0.5vw, 1rem);
	}

	.hero__button {
		font-size: clamp(0.875rem, 0.75vw + 0.5rem, 1.125rem);
		padding: clamp(0.5rem, 0.3vw + 0.4rem, 1rem);
		color: var(--color-primary);
		border: 0px;
		background: transparent;
		font-family: var(--font-primary-400);
	}

	.active {
		border-bottom: 1px solid var(--color-primary);
	}

	.hero__details {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		padding: 1rem 0px;
	}

	.hero__features {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 0.8rem;
	}

	.hero__h2 {
		font-family: var(--font-primary-400);
		font-size: clamp(1.8rem, 2.4vw + 1rem, 4rem);
		font-weight: 400;
	}

	.hero__pill > p {
		font-family: var(--font-primary-400);
		background-color: #eeeff2;
		font-size: clamp(0.81rem, 0.77rem + 0.23vw, 0.88rem);
		padding: 0.2rem;
	}

	.hero__p--price {
		font-family: var(--font-primary-400);
		font-size: 1rem;
		font-weight: 600;
	}

	.hero__config {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.hero__button--cta {
		background: var(--color-primary);
		border: 2px solid var(--color-primary);
		border-radius: 4px;
		padding: 13px 1rem;
		color: var(--color-secondary);
	}

	.hero__button--config {
		background: var(--color-secondary);
		border: 2px solid var(--color-primary);
		border-radius: 4px;
		padding: 13px 1rem;
		color: var(--color-primary);
	}

	.hero__legal {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		text-align: center;
		max-width: 48rem;
	}

	.hero__p {
		font-size: clamp(0.45rem, 0.5vw + 0.3rem, 0.7rem);
		max-width: clamp(300px, 68rem, 90vw);
	}

	@media (width <= 820px) {
		.hero__config {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			flex-direction: column;
			width: 70vw;
		}

		.hero__button--cta {
			background: var(--color-primary);
			border: 2px solid var(--color-primary);
			border-radius: 4px;
			padding: 13px 1rem;
			color: var(--color-secondary);
			width: 100%;
		}

		.hero__button--config {
			background: var(--color-secondary);
			border: 2px solid var(--color-primary);
			border-radius: 4px;
			padding: 13px 1rem;
			color: var(--color-primary);
			width: 100%;
		}

		.hero__p {
			font-size: 0.8rem;
			padding: 0px 2rem;
		}
	}
</style>

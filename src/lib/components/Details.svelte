<script>
	import { datosCompartidos } from '$lib/stores.js';

	const datosAlternativa = {
		aceleracion: '4,8',
		potenciaKw: '300',
		potenciaCv: '408',
		velocidad: '230'
	};
</script>

{#if $datosCompartidos}
	<section class="details">
		<div class="details__container">
			<div class="details__details">
				<div class="details__card">
					<div class="details__numbers">
						<h1 class="details__h1">{$datosCompartidos.aceleracion}</h1>
						<p class="details__p--units">S</p>
					</div>
					<p class="details__p">Aceleración 0-100 km/h con Launch Control</p>
				</div>

				<div class="details__card">
					<div class="details__numbers">
						<h1 class="details__h1">{$datosCompartidos.potenciaKw}</h1>
						<p class="details__p--units">Kw</p>
						<p class="details__p--units">/</p>
						<h1 class="details__h1">{$datosCompartidos.potenciaCv}</h1>
						<p class="details__p--units">CV</p>
					</div>
					<p class="details__p">Potencia máxima (kW)/Potencia máxima (CV)</p>
				</div>

				<div class="details__card">
					<div class="details__numbers">
						<h1 class="details__h1">{$datosCompartidos.velocidad}</h1>
						<p class="details__p--units">km/h</p>
					</div>
					<p class="details__p">Velocidad máxima</p>
				</div>

				<button class="details__button"> Todos los detalles técnicos </button>
			</div>
			<div class="details__car">
				<img
					class="details__img"
					src={$datosCompartidos.imagenFrontal}
					alt="Imaxe de frente de Porsche Taycan Berlina"
				/>
			</div>
		</div>
	</section>
{:else if datosAlternativa}
	<section class="details">
		<div class="details__container">
			<div class="details__details">
				<div class="details__card">
					<div class="details__numbers">
						<h1 class="details__h1">{datosAlternativa.aceleracion}</h1>
						<p class="details__p--units">S</p>
					</div>
					<p class="details__p">Aceleración 0-100 km/h con Launch Control</p>
				</div>

				<div class="details__card">
					<div class="details__numbers">
						<h1 class="details__h1">{datosAlternativa.potenciaKw}</h1>
						<p class="details__p--units">Kw</p>
						<p class="details__p--units">/</p>
						<h1 class="details__h1">{datosAlternativa.potenciaCv}</h1>
						<p class="details__p--units">CV</p>
					</div>
					<p class="details__p">Potencia máxima (kW)/Potencia máxima (CV)</p>
				</div>

				<div class="details__card">
					<div class="details__numbers">
						<h1 class="details__h1">{datosAlternativa.velocidad}</h1>
						<p class="details__p--units">km/h</p>
					</div>
					<p class="details__p">Velocidad máxima</p>
				</div>

				<button class="details__button"> Todos los detalles técnicos </button>
			</div>
			<div class="details__car">
				<img
					class="details__img"
					src="/cars/front/frente-taycan-berlina.avif"
					alt="Imaxe de frente de Porsche Taycan Berlina"
				/>
			</div>
		</div>
	</section>
{/if}
					


<style>
	.details {
		padding: 3rem 3rem 5rem 3rem;
/* 		position: relative;
 */		margin: 0 auto;
		max-width: 1180px;
	}

	.details__container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.details__details {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.details__card {
		display: flex;
		flex-direction: column;
	}

	.details__numbers {
		display: flex;
		align-items: flex-end;
		justify-content: start;
		gap: 0.5rem;
	}

	.details__h1 {
		font-family: var(--font-primary-400);
		font-size: 3.3rem;
		font-weight: 400;
	}

	.details__p--units {
		font-size: 2rem;
		font-family: var(--font-primary-400);
		color: var(--color-primary);
		padding-bottom: 1rem;
		text-transform: uppercase;
	}

	.details__button {
		background: var(--color-secondary);
		border: 1px solid var(--color-primary);
		border-radius: 4px;
		height: 54px;
		width: fit-content;
		padding: 0px 1rem;
	}

	.details__car {
		width: 50%;
	}

	.details__img {
		width: 100%;
	}

	

	@media (width <= 880px) {

		.details{
			padding: 0px;
		}

		.details__container {
			flex-direction: column-reverse;
		}

		.details__details {
			align-items: center;
		}

		.details__card {
			align-items: center;
		}

		.details__h1 {
			font-size: 3.5rem;
		}

		.details__car {
			width: 80%;
		}

		.details__p--units {
			padding-bottom: 0rem;
		}
	}

	@media (width <= 440px) {
		.details__container {
			flex-direction: column-reverse;
		}

		.details__details {
			align-items: center;
		}

		.details__card {
			align-items: center;
		}

		.details__h1 {
			font-size: 3.5rem;
		}
	}

	@media (width <= 340px) {
		.details__h1 {
			font-size: 3rem;
		}
	}
</style>

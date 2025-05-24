<footer class="footer">
	<div class="footer__container">
		<div class="footer__logo">
			<a href="/" class="footer__a">
				<img class="footer__img" src="porsche-logo.svg" alt="Logo de Porsche" />
			</a>
		</div>
		<hr />
		<div class="footer__credits">
			<p class="footer__p">© 2025 Porsche Ibérica, S.A.</p>
			<a class="footer__a--legal" href="#" target="_blank" rel="noopener noreferrer">
				Aviso Legal
			</a>

			<a class="footer__a--legal" href="#" target="_blank" rel="noopener noreferrer">
				Política de cookies
			</a>

			<a class="footer__a--legal" href="#" target="_blank" rel="noopener noreferrer">
				Otros Países
			</a>

			<a class="footer__a--legal" href="#" target="_blank" rel="noopener noreferrer">
				Open Source Software Notice
			</a>

			<a class="footer__a--legal" href="#" target="_blank" rel="noopener noreferrer">
				Sistema de Denuncia de Irregularidades
			</a>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--color-primary);
		width: 100%;
		padding: 0px 3rem;
/* 		position: relative; 
        top: 0vh; */
	}

	.footer__logo {
		padding: 3rem 0px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.footer__img {
		width: 240px;
	}

	hr {
		border: 1px solid #404044;
	}

	.footer__credits {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding: 2rem 0px;
	}

	.footer__p {
		font-family: var(--font-primary-400);
		color: var(--color-secondary);
		font-size: 0.8rem;
	}

	.footer__a--legal {
		font-family: var(--font-primary-400);
		color: var(--color-secondary);
		font-size: 0.8rem;
	}

	@media (width <= 1180px) {
		.footer__credits {
			flex-direction: column;
		}
	}
</style>

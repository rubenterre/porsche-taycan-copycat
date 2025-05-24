<script>
</script>

<header class="header">
	<nav class="header__nav">
		<div class="header__menu">
			<button class="header__button">
				<img
					class="header__img--menu"
					src="/icons/menu-icon.svg"
					alt="Icono de menu de navegación"
				/>
				<p class="header__p">Menú</p>
			</button>
		</div>
		<div class="header__logo">
			<a href="/">
				<picture>
            <source srcset="porsche-logo-small.webp" media="(max-width: 540px)" />
            <img src="porsche-logo.svg" alt="Logo de Porsche" class="header__img--logo" />
        </picture>
			</a>
		</div>
		<div class="header__user">
			<a href="#">
				<img
					class="header__img--user"
					src="/icons/user-icon.svg"
					alt="Icono de perfil de usuario"
				/>
			</a>
		</div>
	</nav>
</header>

<style>
	.header {
		width: 100%;
		background: var(--color-gradient);
		padding: 1.5rem 1rem 5rem 1rem;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 100;
	}

	.header__nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 0px 3rem;
		height: 48px;
	}

    .header__button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        gap: .5rem;
        border: 0px;
    }

    .header__p{
        font-family: var(--font-tertiary-700);
        color: var(--color-secondary);
		font-size: 1rem;
    }


	.header__img--menu {
		height: 24px;
	}

	.header__img--user {
		height: 24px;
		width: 70px;
	}

	.header__img--logo {
		height: clamp(.5rem, 1rem, 2.5rem)
	}

	@media (width <= 480px){
.header__nav {
	padding: 0px;
}

	.header__img--logo {
		height: 2.6rem;
	}

	}
</style>

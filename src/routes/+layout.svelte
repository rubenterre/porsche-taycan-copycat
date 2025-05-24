
<slot></slot>

<style>
    :global(*) {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    :global(html){
        font-size: clamp(1rem, 1vw + .5rem, 2rem);
    }

    @font-face{
        font-family: 'PorscheNext-400';
        src: url('/fonts/PorscheNext-normal-400-100.ttf')
    }

    @font-face{
        font-family: 'PorscheNext-600';
        src: url('/fonts/PorscheNext-normal-600-100.ttf')
    }

    @font-face{
        font-family: 'PorscheNext-700';
        src: url('/fonts/PorscheNext-normal-700-100.ttf')
    }

    @font-face{
        font-family: 'PorscheNextWLa-400';
        src: url('/fonts/PorscheNextWLa-normal-400-100.ttf')
    }

    @font-face{
        font-family: 'PorscheNextWLa-700';
        src: url('/fonts/PorscheNextWLa-normal-700-100.ttf')
    }

    :root{
        --font-primary-400: 'PorscheNext-400';
        --font-secondary-600: 'PorscheNext-600';
        --font-tertiary-700: 'PorscheNext-700';
        --font-alternate-400: 'PorscheNextWLa-400';
        --font-alternate-700: 'PorscheNextWLa-700';
        --color-primary: #000000;
        --color-secondary: #FFFFFF;
        --color-gradient: linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.48) 50%, rgba(0, 0, 0, 0) 100%);

    }
    
    :global(body) {
     background: var(--color-secondary);
     color: var(--color-primary);
     -webkit-font-smoothing: antialiased;
     width: 100vw;
      display: flex;
    flex-direction: column;
    min-height: 100vh;
}

:global(main) {
    flex: 1;
}
    
    :global(body, input, button) {
     font-size: 14px;
     font-family: var(--font-primary-400);
    }
    
    :global(button) {
     cursor: pointer;
    }
</style>
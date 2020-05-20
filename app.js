window.onload = () => {
    const userCard = window.document.querySelector('user-card');
    userCard.shadowRoot.addEventListener('delete', () => console.log('native card delete clicked!'));

    const userCardStencil = window.document.querySelector('user-card-stencil');
    userCardStencil.addEventListener('deleteStencil', () => console.log('stencil card delete clicked!'));

    const userCardAngular = window.document.querySelector('user-card-angular');
    userCardAngular.addEventListener('deleteAngular', () => console.log('angular card delete clicked!'));
}

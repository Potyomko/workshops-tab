const refs = {
    controls: document.querySelector('[data-controls]'),
    pane: document.querySelector('[data-panes]'),
};
refs.controls.addEventListener('click', onControlsClick);

function onControlsClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'A') {
        return;
    }
    const currentSituation = refs.controls.querySelector('.controls__item--active')
    if (currentSituation) {
        currentSituation.classList.remove('controls__item--active')
    }
    event.target.classList.add('controls__item--active')
    document.querySelector(`${event.target.hash}`).classList.add('pane--active')
}

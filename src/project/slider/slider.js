import './slider.scss';

export class Slider {
    constructor(targetElement) {
        this.target = targetElement;
        this.slide = [
            '../../assets/images/photo_1.png',
            '../../assets/images/photo_2.png',
            '../../assets/images/photo_3.png',
            '../../assets/images/photo_4.png',
            '../../assets/images/photo_5.png'];
        this.render();
    }

    render() {
        this.output = document.createElement('div');
        this.output.classList.add('slider-wrap');
        this.renderControls();

    }

    renderControls () {
        this.controlNext = document.createElement('button');
        this.controlPrev = document.createElement('button');

    }


}
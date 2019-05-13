/*jshint esversion: 6 */
'use strict';

class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  newDiv() {
    let div = document.createElement('div'),
        text = document.createTextNode('Текст ТЕКСТ text');
    div.style.cssText = `height: ${this.height}px; width: ${this.width}px;
     background: ${this.bg}; font-size: ${this.fontSize}px;
     text-align: ${this.textAlign}`;
    div.appendChild(text);
    document.body.appendChild(div);
 }
}

let newDivTwo = new Options(500, 1000, 'red', 40, 'right' );
newDivTwo.newDiv();


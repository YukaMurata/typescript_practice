export default class IndexUI {
  text: string;
  $text: HTMLElement | null;

  constructor() {
    this.text = 'hello';
    this.$text = document.querySelector('.test');

    this.init();
  }

  init(): void {
    this.showText();
  }

  showText(): void {
    if (this.$text) {
      this.$text.textContent = this.text;
    }
  }
}

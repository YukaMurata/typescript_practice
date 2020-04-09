import anime from 'animejs';

export default class ModalUI {
  $modal: HTMLElement | null;
  $openButtons: HTMLElement[];
  $closeButtons: HTMLElement[];

  constructor($modal: string, $openButtons: string, $closeButtons: string) {
    this.$modal = document.querySelector($modal);
    this.$openButtons = Array.from(document.querySelectorAll($openButtons));
    this.$closeButtons = Array.from(document.querySelectorAll($closeButtons));
    this.bind();
  }

  bind(): void {
    this.$openButtons.forEach(($openButton) => {
      $openButton.addEventListener('click', () => {
        this.open();
      });
    });

    this.$closeButtons.forEach(($closeButton) => {
      $closeButton.addEventListener('click', () => {
        this.close();
      });
    });
  }

  open(): void {
    if (!this.$modal) return;
    this.$modal.style.display = 'block';
    anime({
      targets: this.$modal,
      opacity: 1
    });
  }

  close(): void {
    anime({
      targets: this.$modal,
      opacity: 0,
      complete: () => {
        if (!this.$modal) return;
        this.$modal.style.display = 'none';
      }
    });
  }
}

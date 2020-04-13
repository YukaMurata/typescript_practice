import anime from 'animejs';

export default class ScrollToTarget {
  $scrollButtons: HTMLElement[];

  constructor() {
    this.$scrollButtons = Array.from(document.querySelectorAll('.js-scroll-target'));

    this.bind();
  }

  /**
   * イベント付与
   */
  bind(): void {
    this.$scrollButtons.forEach(($scrollButton: HTMLElement) => {
      $scrollButton.addEventListener('click', e => {
        console.log(e.currentTarget);
        const target = e.currentTarget;
        if (target instanceof HTMLAnchorElement) {
          const $target = document.body;
          if ($target) {
            e.preventDefault();
            this.scroll($target.getBoundingClientRect().top);
          }
        }
      });
    });
  }

  /**
   * スクロール
   * @param scrollTop
   */
  scroll(scrollTop: number): void {
    anime({
      targets: 'html, body',
      scrollTop: scrollTop,
      duration: 400,
      easing: 'easeInOutSine'
    });
  }
}

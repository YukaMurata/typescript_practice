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
      $scrollButton.addEventListener('click', (e) => {
        const target = e.currentTarget;
        if (target instanceof HTMLAnchorElement) {
          const $target = document.querySelector(target.hash);
          if ($target) {
            e.preventDefault();
            this.scroll($target);
          }
        }
      });
    });
  }

  /**
   * スクロール
   * @param scrollTop
   */
  scroll($target: Element) {
    const $window = window.document.scrollingElement || window.document.body || window.document.documentElement;
    if ($target instanceof HTMLElement) {
      anime({
        targets: $window,
        scrollTop: $target.offsetTop,
        duration: 400,
        easing: 'easeInOutSine'
      });
    }
  }
}

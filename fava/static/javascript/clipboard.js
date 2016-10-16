import Clipboard from 'clipboard';

export default function initClipboard() {
  if (!$('.status-indicator').length) {
    return;
  }

  new Clipboard('.status-indicator'); // eslint-disable-line no-new
  new Clipboard('#copy-balances', { // eslint-disable-line no-new
    text(trigger) {
      const text = trigger.getAttribute('data-clipboard-text').split('\n');
      text.splice(0, 2);
      return text.join('\n').trim();
    },
  });
}

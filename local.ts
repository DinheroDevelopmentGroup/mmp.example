import { TinyColor } from '@ctrl/tinycolor';

import chat from '../ddg.chat/local.js';

setInterval(() => {
  chat.toClientActionBar({
    text: new Date().toTimeString(),
    color: new TinyColor(
      `hsv(${((Date.now() / 10_000) % 1) * 360}, 100%, 100%)`,
    ).toHexString(),
  });
}, 1000 / 12);

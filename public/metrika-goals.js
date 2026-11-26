(function () {
  function goal(name) {
    if (typeof window.ym === 'function') window.ym(111309225, 'reachGoal', name);
  }

  document.addEventListener('click', function (event) {
    if (event.target.closest && event.target.closest('#calc button')) goal('calc_interaction');
    var link = event.target.closest && event.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    if (/^tel:/i.test(href)) goal('click_phone');
    else if (/^https:\/\/(?:www\.)?max\.ru\//i.test(href)) goal('click_max');
    else if (/^(?:tg:|https:\/\/t\.me\/)/i.test(href)) goal('click_telegram');
    else if (/^https:\/\/(?:wa\.me|(?:api\.)?whatsapp\.com)\//i.test(href)) goal('click_whatsapp');
  });
  document.addEventListener('change', function (event) {
    if (event.target.closest && event.target.closest('#calc')) goal('calc_interaction');
  });
})();

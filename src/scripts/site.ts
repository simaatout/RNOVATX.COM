/* Site-wide behaviour: header state, research dropdown, mobile drawer,
   scroll reveal and copy-to-clipboard. No dependencies. */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Header: transparent → solid on scroll ---------- */
const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* ---------- Research dropdown (click, hover, keyboard) ---------- */
document.querySelectorAll<HTMLElement>('[data-dropdown]').forEach((dd) => {
  const trigger = dd.querySelector<HTMLButtonElement>('[data-dropdown-trigger]')!;
  const menu = dd.querySelector<HTMLElement>('[data-dropdown-menu]')!;
  const links = () => Array.from(menu.querySelectorAll<HTMLAnchorElement>('a'));
  const set = (open: boolean) => {
    dd.classList.toggle('is-open', open);
    trigger.setAttribute('aria-expanded', String(open));
  };
  trigger.addEventListener('click', () => set(!dd.classList.contains('is-open')));
  dd.addEventListener('mouseenter', () => window.matchMedia('(hover: hover)').matches && set(true));
  dd.addEventListener('mouseleave', () => window.matchMedia('(hover: hover)').matches && set(false));
  dd.addEventListener('focusout', (e) => {
    if (!dd.contains(e.relatedTarget as Node)) set(false);
  });
  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); set(true); links()[0]?.focus(); }
  });
  menu.addEventListener('keydown', (e) => {
    const items = links();
    const i = items.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dd.classList.contains('is-open')) { set(false); trigger.focus(); }
  });
});

/* ---------- Mobile drawer with focus trap ---------- */
const drawer = document.querySelector<HTMLElement>('[data-mobile-nav]');
const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
const closeBtn = document.querySelector<HTMLButtonElement>('[data-menu-close]');
if (drawer && openBtn && closeBtn) {
  const focusables = () =>
    Array.from(drawer.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
  const open = () => {
    drawer.hidden = false;
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };
  const close = () => {
    drawer.hidden = true;
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    openBtn.focus();
  };
  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  drawer.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
    if (e.key !== 'Tab') return;
    const f = focusables();
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  window.matchMedia('(min-width: 1080px)').addEventListener('change', (m) => { if (m.matches && !drawer.hidden) close(); });
}

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
    }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  revealEls.forEach((el) => io.observe(el));
}

/* ---------- Copy email ---------- */
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  const label = btn.querySelector<HTMLElement>('[data-copy-label]');
  const original = label?.textContent ?? '';
  const status = btn.parentElement?.querySelector<HTMLElement>('[data-copy-status]');
  btn.addEventListener('click', async () => {
    const value = btn.dataset.copy!;
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = value; ta.setAttribute('readonly', ''); ta.style.position = 'absolute'; ta.style.left = '-9999px';
      document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
    }
    const done = btn.dataset.copied ?? 'Copied';
    if (label) label.textContent = done;
    if (status) status.textContent = done;
    btn.classList.add('is-copied');
    setTimeout(() => { if (label) label.textContent = original; if (status) status.textContent = ''; btn.classList.remove('is-copied'); }, 2200);
  });
});

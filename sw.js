const CACHE = 'pronunciation-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// 캐싱 허용할 자체 에셋만 (외부 API는 캐싱 금지)
const CACHE_ALLOWED_ORIGINS = [self.location.origin];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // 외부 API 요청은 캐시 없이 네트워크 직접 통신
  if (!CACHE_ALLOWED_ORIGINS.includes(url.origin)) {
    e.respondWith(fetch(e.request));
    return;
  }

  // 자체 파일만 캐시 우선 전략
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.status === 200 && res.type !== 'opaque') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => cached || new Response('오프라인 상태입니다.', { status: 503 }));
    })
  );
});

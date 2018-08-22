self.addEventListener('push', event => {
  event.waitUntil(
    self.registration.showNotification('お知らせ', {
      body: event.data.text(),
      icon: 'https://iiyatsu.hrfmmymt.com/static/img/icons/icon.png'
    })
  )
})

self.addEventListener('notificationclick', event => {
  clients.openWindow('https://iiyatsu.hrfmmymt.com')

  event.notification.close()
})

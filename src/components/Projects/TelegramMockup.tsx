export default function TelegramMockup() {
  const messages = [
    { from: 'bot', text: '⚡ Precio actual: 0.082 €/kWh', time: '08:00' },
    { from: 'bot', text: '🟢 Hora barata detectada (0.06–0.09 €/kWh)\nBuen momento para lavar o cargar.', time: '08:01' },
    { from: 'user', text: '¿Cuándo sube el precio hoy?', time: '08:03' },
    { from: 'bot', text: '📈 Pico esperado: 19:00–21:00\nPrecio estimado: 0.24 €/kWh', time: '08:03' },
    { from: 'bot', text: '🔴 Alerta: precio > 0.20 €/kWh\n20:00 — 0.26 €/kWh', time: '20:00' },
  ]

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        width: '100%',
        maxWidth: '220px',
        background: '#1c2733',
        border: '1px solid rgba(255,255,255,0.08)',
        fontFamily: 'var(--font-body)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ background: '#17212b', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
          style={{ background: '#2AABEE', color: '#fff', fontFamily: 'var(--font-display)' }}
        >
          ⚡
        </div>
        <div>
          <div className="text-sm font-medium" style={{ color: '#fff' }}>
            Luz Informer Bot
          </div>
          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            online
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-2 px-3 py-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className="px-3 py-2 rounded-xl text-xs max-w-[85%] relative"
              style={{
                background: msg.from === 'user' ? '#2b5278' : '#182533',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.5,
                whiteSpace: 'pre-wrap',
              }}
            >
              {msg.text}
              <span
                className="block text-right mt-1"
                style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.65rem' }}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

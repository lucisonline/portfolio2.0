export default function BrowserMockup({ url = 'localhost:3000', children }) {
  return (
    <div className="browser">
      <div className="browser-bar">
        <span className="browser-dot r" />
        <span className="browser-dot y" />
        <span className="browser-dot g" />
        <span className="browser-url">{url}</span>
      </div>
      <div className="browser-body">{children}</div>
    </div>
  )
}

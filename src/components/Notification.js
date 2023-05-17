function Notification() {
    return (
    <>
    <input type="checkbox" id="notification-modal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative">
        <label htmlFor="notification-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-lg font-bold">Notifications</h3>
        <ul className="menu bg-base-100 w-full p-2 rounded-box">
          <li><a href="/">Item 1</a></li>
          <li><a href="/">Item 2</a></li>
          <li><a href="/">Item 3</a></li>
        </ul>
      </div>
    </div>
    </>
    )
}

export default Notification;
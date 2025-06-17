

import './App.css'

function App() {
 

  return (
    <>
     {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn p-20 bg-amber-400 text-white font-bold text-2xl" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box p-5">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
      <h1 className='font-bold text-3xl text-center'>Vite + React</h1>
      <div className="avatar-group -space-x-6 p-20">
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
    </div>
  </div>
  <div className="avatar avatar-placeholder">
    <div className="bg-neutral text-neutral-content w-12">
      <span>+99</span>
    </div>
  </div>
</div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

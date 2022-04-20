
import './Contact.modul.css'
const Contact = () => {

  return (
    <>
    <div className="co">
    <marquee behavior="alternate">Md Intezar Alam</marquee>

      <form className="p-5">
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">Name</label>
          <input type="text" autocomplete="off" className="form-control" id="validationDefault01" required />
        </div>
        <br />
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">Email</label>
          <input type="email" autocomplete="off" className="form-control" id="validationDefault01" required />
        </div>
        <br />
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">password</label>
          <input type="password" autocomplete="off" className="form-control" id="validationDefault01" required />
        </div>
        <br />
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">Mobile No</label>
          <input type="text" autocomplete="off" className="form-control" id="validationDefault01" required />
        </div>
        <div className="col-12 m-3">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
      </div>
    </>
  )
}
export default Contact
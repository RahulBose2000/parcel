const Contact = ()=>{
    return (
        <div className="contact">

        <h1 className="font-bold text-3xl p-4 m-4">CONTACT</h1>
        <form>
            <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
            <input type="text" className="border border-black p-2 m-2" placeholder="message"/>
            <button className=" border bg-cyan-500 p-2 m-2 rounded-lg">Submit</button>
        </form>

        </div>
    )
}

export default Contact;
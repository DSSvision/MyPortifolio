import Input from "./Input";
export default function Contact() {
  return (
    <div className="Contact" id="Contact">
      <div>
        <h2>Contact</h2>
      </div>
      <div className="InpText">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Subject" />
        <Input type="textArea" placeholder="Message" />
        <button>Submit</button>
      </div>
    </div>
  );
}

import "./contactMe.css"

const ContactMe = () => {

    const sendEmail = () => {
        const email = 'ongweijie7@gmail.com';
        const body = 'Hello,';

        const mailtoLink = `mailto:${email}?body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    }

    return (
        <section className="contactMe">
            <h1 className="section-name">04. Contact Me</h1>
            <div className="content">
                <span>Reach Out to Me</span>
                <p>I am open to opportunities or any discussions, so feel free to contact me on any of my social media platforms or drop me an email below</p>
                <div onClick={sendEmail} className="button"> Say Hi! </div>
            </div>
        </section>
    )
}

export default ContactMe;
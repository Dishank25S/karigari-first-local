import React, { useEffect } from 'react';
import ContactSection from '../components/ContactSection';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact | Karigari';
  }, []);

  return (
    <div className="pt-16">
      <section>
        <div className="container-custom">
          {/* You can optionally add a header or breadcrumbs here */}
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Contact;

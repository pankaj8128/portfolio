import { useState } from 'react';
import { Send, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/personal';
import NeoButton from '../components/ui/NeoButton';
import styles from './Contact.module.css';

const infos = [
  { label: 'Residence', value: personalInfo.location, link: null },
  { label: 'Phone', value: personalInfo.phone, link: `tel:${personalInfo.phone}` },
  { label: 'Email', value: personalInfo.email, link: `mailto:${personalInfo.email}` },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopy = (value, index) => {
    navigator.clipboard.writeText(value);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <main className={`${styles.page} container`}>
      <div className={styles.inner}>
        <div className={styles.spacer} />

        <h1 className={styles.heading}>Get in touch</h1>

        <div className={styles.spacerSm} />

        {/* Info buttons - matching original small inline style */}
        <div className={styles.infos}>
          {infos.map((item, index) => (
            <div key={index} className={styles.infoRow}>
              <NeoButton
                href={item.link || undefined}
                external={!!item.link}
                variant="zinc"
                size="sm"
                shadow="sm"
                className={styles.infoBtn}
              >
                {item.label}: {item.value}
              </NeoButton>
              <NeoButton
                variant="zinc"
                size="icon"
                shadow="sm"
                className={styles.copyBtn}
                onClick={() => handleCopy(item.value, index)}
                aria-label={`Copy ${item.label}`}
              >
                {copiedIndex === index ? (
                  <Check size={14} strokeWidth={2.5} />
                ) : (
                  <Copy size={14} strokeWidth={2.5} />
                )}
              </NeoButton>
            </div>
          ))}
        </div>

        <div className={styles.spacerSm} />

        {/* Form - matching original neobrutalism inputs */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="contact-name" className={styles.label}>Full Name</label>
            <div className={styles.inputWrapper}>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g. John Doe"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-email" className={styles.label}>Your Email</label>
            <div className={styles.inputWrapper}>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="e.g. john.doe@example.com"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-subject" className={styles.label}>Subject</label>
            <div className={styles.inputWrapper}>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-message" className={styles.label}>Message</label>
            <div className={styles.inputWrapper}>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message"
                rows={7}
                className={`${styles.input} ${styles.textarea}`}
              />
            </div>
          </div>

          <NeoButton
            type="submit"
            size="lg"
            className={styles.submitBtn}
          >
            <Send size={16} />
            <span>Send</span>
          </NeoButton>
        </form>

        <div className={styles.spacerLg} />
      </div>
    </main>
  );
}

import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';
import SectionHeader from './common/SectionHeader';
import { useLanguage } from '../context/LanguageContext';

const contactItems = [
    { Icon: Mail, key: 'email', value: 'timliltsiham@gmail.com', href: 'mailto:timliltsiham@gmail.com?subject=Contact portfolio' },
    { Icon: Phone, key: 'phone', value: '+212 6 11 68 92 13', href: 'tel:+212611689213' },
    { Icon: Linkedin, key: 'linkedin', value: 'linkedin.com/in/siham-timlilt', href: 'https://www.linkedin.com/in/siham-timlilt/' },
    { Icon: MapPin, key: 'location' }
];

const WhatsAppIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

function Contact() {
    const { t } = useLanguage();
    const c = t.contact;
    // 🔒 Configuration depuis les variables d'environnement
    const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || "212611689213";

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendToWhatsApp = (e) => {
        e.preventDefault();

        // Créer le message WhatsApp formaté
        const whatsappMessage = `
🆕 *${c.whatsapp.heading}*

👤 *${c.whatsapp.name}:* ${formData.name}
📧 *${c.whatsapp.email}:* ${formData.email}

💬 *${c.whatsapp.message}:*
${formData.message}
        `.trim();

        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, '_blank');

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="section">
            <div className="container-page">
                <SectionHeader
                    eyebrow={c.eyebrow}
                    title={c.title}
                    description={c.description}
                />

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Coordonnées */}
                    <div className="lg:col-span-2 space-y-3">
                        {contactItems.map(({ Icon, key, value = c.locationValue, href }) => {
                            const label = c.labels[key];
                            const content = (
                                <>
                                    <div className="p-2.5 rounded-lg bg-brand-50 dark:bg-brand-500/10">
                                        <Icon size={18} className="text-brand-600 dark:text-brand-400" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</p>
                                        <p className="font-medium text-slate-900 dark:text-white truncate">{value}</p>
                                    </div>
                                    {href && <ArrowUpRight size={16} className="text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors" />}
                                </>
                            );
                            return href ? (
                                <a
                                    key={key}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="group card p-4 flex items-center gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                                >
                                    {content}
                                </a>
                            ) : (
                                <div key={key} className="card p-4 flex items-center gap-4">{content}</div>
                            );
                        })}

                        <div className="card overflow-hidden">
                            <iframe
                                title={c.mapTitle}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18394.408178834237!2d-7.578041622883153!3d33.53868804890426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda63316b108b659%3A0x60b24f73eb53a9c0!2sSalmia%202%2C%20Casablanca!5e1!3m2!1sfr!2sma!4v1740438385790!5m2!1sfr!2sma"
                                width="100%"
                                height="220"
                                className="border-0 block"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div className="lg:col-span-3 card p-6 md:p-8">
                        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{c.formTitle}</h3>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            {c.formNote}
                        </p>

                        <form className="mt-6 space-y-5" onSubmit={sendToWhatsApp}>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        {c.name}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="input"
                                        placeholder={c.namePlaceholder}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        {c.emailLabel}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="input"
                                        placeholder={c.emailPlaceholder}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    {c.message}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="input resize-none"
                                    placeholder={c.messagePlaceholder}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full sm:w-auto">
                                <WhatsAppIcon />
                                {c.submit}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

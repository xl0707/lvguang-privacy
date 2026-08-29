import type { Metadata } from 'next';
import styles from './support.module.css';

const supportEmail = 'su_junyu@outlook.com';
const emailHref = `mailto:${supportEmail}?subject=${encodeURIComponent('履光技术支持')}`;

export const metadata: Metadata = {
  title: '履光技术支持 / Lvguang Support',
  description: '履光 iOS App 技术支持与联系方式。',
};

export default function SupportPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand} aria-label="履光">
          <span className={styles.brandMark} aria-hidden="true">履</span>
          <span>履光 <small>Lvguang</small></span>
        </div>
        <span className={styles.pageName}>技术支持</span>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="support-title">
          <p className={styles.eyebrow}>LVGUANG SUPPORT · iOS</p>
          <h1 id="support-title">需要帮助？<br />我们在这里。</h1>
          <p className={styles.lede}>
            如果你在使用履光时遇到问题，或希望提出建议，请通过电子邮件联系我们。
          </p>

          <a className={styles.contactCard} href={emailHref}>
            <span className={styles.icon} aria-hidden="true">↗</span>
            <span className={styles.contactCopy}>
              <small>联系我们</small>
              <strong>{supportEmail}</strong>
              <span>打开邮件 App</span>
            </span>
          </a>
        </section>

        <aside className={styles.note} aria-labelledby="email-note-title">
          <span className={styles.noteIndex}>01</span>
          <div>
            <h2 id="email-note-title">发送邮件时</h2>
            <p>请简单说明遇到的问题、使用的 iPhone 型号和 iOS 版本，以便我们更快了解情况。</p>
            <p className={styles.privacyNote}>请勿通过邮件发送身份证件、成绩单或隐私保险箱中的原始文件。</p>
          </div>
        </aside>
      </main>

      <footer className={styles.footer}>
        <span>履光 Lvguang</span>
        <span>记录经历，留住成长</span>
      </footer>
    </div>
  );
}

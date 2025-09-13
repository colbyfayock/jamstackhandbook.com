import styles from './Banner.module.scss';

const Banner = ({ children, className, variant = 'default' }) => {
  const bannerClass = variant === 'success' ? styles.bannerSuccess : styles.banner;
  
  return (
    <div className={`${bannerClass} ${className || ''}`}>
      {children}
    </div>
  );
};

export default Banner;
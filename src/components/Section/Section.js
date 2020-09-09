import styles from './Section.module.scss';

const Section = ({ children, className, backgroundColor, spacing, ...rest }) => {
  let sectionClassName = styles.section;

  if ( className ) {
    sectionClassName = `${sectionClassName} ${className}`;
  }

  return (
    <div className={sectionClassName} data-background-color={backgroundColor} data-spacing={spacing} {...rest}>
      { children }
    </div>
  )
}

export default Section;
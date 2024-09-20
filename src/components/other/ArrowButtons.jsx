import styles from '../../styles/other/arrowButtons.module.css';

export default function ArrowButtons({scrollContainerRef}) {

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: -200,
            behavior: 'smooth'
          });
        }
      };
    
      const scrollRight = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: 200, 
            behavior: 'smooth'
          });
        }
      };

  return (
    <div className={styles.arrows}>
    <i className="fa-solid fa-arrow-left" onClick={() => scrollLeft()}></i>
    <i className="fa-solid fa-arrow-right" onClick={() => scrollRight()}></i>
</div>
  )
}

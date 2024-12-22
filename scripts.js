function toggleServiceDetails(serviceElement) {
    const details = serviceElement.querySelector('.details');
    
    // Debugging: Log the element and whether it has the 'open' class
    console.log("Toggling details:", details);
  
    // Toggle the 'open' class
    details.classList.toggle('open');
    
    // Debugging: Check if 'open' class was added successfully
    console.log("Class list after toggle:", details.classList);
  }
  
  

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
  
    // Check if sections exist before adding scroll listener
    if (sections.length > 0) {
      window.addEventListener('scroll', () => {
        sections.forEach(section => {
          const sectionPosition = section.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;
  
          if (sectionPosition < screenPosition) {
            section.classList.add('appear');
          }
        });
      });
    } else {
      console.warn('No sections found on the page.');
    }
    
      
});

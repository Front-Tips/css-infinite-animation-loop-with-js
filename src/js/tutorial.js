document.addEventListener("DOMContentLoaded", () => {
  const circle = document.querySelector(".circle");

  // Get all animations applied to the cat element
  const allAnimations = circle.getAnimations();

  allAnimations.forEach((animation) => {
    // Display each `animation name`
    console.log(animation.animationName);

    // Set each animation to loop `infinitely`
    animation.effect.updateTiming({
      iterations: Infinity,
    });
  });
});

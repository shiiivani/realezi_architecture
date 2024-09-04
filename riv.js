document.addEventListener("DOMContentLoaded", function () {
  const partyPopper = new rive.Rive({
    src: "./assets/animation/Party-popper.riv",
    canvas: document.getElementById("partyPopper"),
    autoplay: true,
    onLoad: () => {
      partyPopper.resizeDrawingSurfaceToCanvas();
    },
  });

  const meetTeam = new rive.Rive({
    src: "./assets/riv/meet-the-team.riv",
    canvas: document.getElementById("meetTeam"),
    autoplay: true,
  });

  const finaliseDesigns = new rive.Rive({
    src: "./assets/riv/finalise-designs.riv",
    canvas: document.getElementById("finaliseDesigns"),
    autoplay: true,
  });

  const sealTheDeal = new rive.Rive({
    src: "./assets/riv/seal-the-deal.riv",
    canvas: document.getElementById("sealTheDeal"),
    autoplay: true,
  });

  const getWorkStarted = new rive.Rive({
    src: "./assets/riv/get-work-started.riv",
    canvas: document.getElementById("getWorkStarted"),
    autoplay: true,
  });

  const installationBegins = new rive.Rive({
    src: "./assets/riv/installation-begins.riv",
    canvas: document.getElementById("installationBegins"),
    autoplay: true,
  });

  const moveIn = new rive.Rive({
    src: "./assets/riv/move-in.riv",
    canvas: document.getElementById("moveIn"),
    autoplay: true,
  });

  const mobileMeetTeam = new rive.Rive({
    src: "./assets/riv/meet-the-team.riv",
    canvas: document.getElementById("mobileMeetTeam"),
    autoplay: true,
  });

  const mobileFinaliseDesigns = new rive.Rive({
    src: "./assets/riv/finalise-designs.riv",
    canvas: document.getElementById("mobileFinaliseDesigns"),
    autoplay: true,
  });

  const mobileSealTheDeal = new rive.Rive({
    src: "./assets/riv/seal-the-deal.riv",
    canvas: document.getElementById("mobileSealTheDeal"),
    autoplay: true,
  });

  const mobileGetWorkStarted = new rive.Rive({
    src: "./assets/riv/get-work-started.riv",
    canvas: document.getElementById("mobileGetWorkStarted"),
    autoplay: true,
  });

  const mobileInstallationBegins = new rive.Rive({
    src: "./assets/riv/installation-begins.riv",
    canvas: document.getElementById("mobileInstallationBegins"),
    autoplay: true,
  });

  const mobileMoveIn = new rive.Rive({
    src: "./assets/riv/move-in.riv",
    canvas: document.getElementById("mobileMoveIn"),
    autoplay: true,
  });
});

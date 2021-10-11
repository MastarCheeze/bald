var toggle = 0;

$(document).ready(function() {
  $("#button").click(function() {
    toggle = (toggle + 1) % 7;
    
    switch(toggle) {
      case 0:
        $("#title").text("Bald Bowler");
        $("#text").text("0");
        $("#image").attr("src", "img/bowler.png");
        break;
      case 1:
        $("#title").text("No Moustache Barbarian");
        $("#text").text("1");
        $("#image").attr("src", "img/barbarian.png");
        break;
      case 2:
        $("#title").text("No Eyebrows Giant");
        $("#text").text("2");
        $("#image").attr("src", "img/giant.png");
        break;
      case 3:
        $("#title").text("Hairless Wizard");
        $("#text").text("5");
        $("#image").attr("src", "img/wizard.jpeg");
        break;
      case 4:
        $("#title").text("Hairless Electrowizard");
        $("#text").text("9");
        $("#image").attr("src", "img/electrowizard.png");
        break;
      case 5:
        $("#title").text("No Hat Miner");
        $("#text").text("10");
        $("#image").attr("src", "img/miner.png");
        break;
      case 6:
        $("#title").text("Bald Icewizard");
        $("#text").text("99999999");
        $("#image").attr("src", "img/icewizard.png");
        break;
    }
  });
});

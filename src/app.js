window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let domains = [];

  pronoun.forEach(element1 => {
    adj.forEach(element2 => {
      noun.forEach(element3 => {
        domains.push(` ${element1}${element2}${element3}.com`);
      });
    });
  });

  this.console.log(domains);
  document.getElementById("domains").innerHTML = domains;
};

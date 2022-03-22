/* eslint-disable */
import "bootstrap";
import "./style.css";

function genDomain() {
  let domainName = [];
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          domainName.push(" " + pronoun[i] + adj[j] + noun[k] + domain[l]);
        }
      }
    }
  }

  const genDomain = () => {
    document.getElementById("domain.results").innerHTML = genDomain();
  };
}
document.getElementById("myBtn").addEventListener("click".setRandomName);

setRandomName();

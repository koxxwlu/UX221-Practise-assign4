class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class JaydenWasHere extends HTMLElement{
  connectedCallback(){
    this.innerHTML = "Jayden was here";
  }
}

customElements.define("x-Jayden", JaydenWasHere);

class TwoSidedMarket extends HTMLElement {
	connectedCallback(){
		this.innerHTML = <a herf="side-a">Side A</a>
	}
}
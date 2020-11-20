const $template=document.getElementById("quiz-template")

 class Quiz extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild($template.content.cloneNode(true));    
        this.$question=this.shadowRoot.getElementById("question")
        this.$answer1=this.shadowRoot.getElementById("answer1");
        this.$answer2=this.shadowRoot.getElementById("answer2");
        this.$answer3=this.shadowRoot.getElementById("answer3");
        this.$answer4=this.shadowRoot.getElementById("answer4");
        this.$quizContainer=this.shadowRoot.querySelector(".quiz-container")
    }
    static get observedAttributes(){
        return ["question","answer1","answer2"]
    }
    attributeChangedCallback(name,oldv,newV){
       
        
    }
}

window.customElements.define("quiz-container",Quiz);


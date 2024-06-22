export class sharedFunctions {

    static loadIdValues(){
        cy.fixture("idMapping.json").then((data)=>{
            this.idvals= data
        })
    }

    static loadXpathValues(){
        cy.fixture("xpathMapping.json").then((data)=>{
            this.xpathvals=data
        })
    }

    static getIdValue(key){
        return this.idvals[key]
     }
     static getXpathValue(key){
        return this.xpathvals[key]
     }
}

export default sharedFunctions;
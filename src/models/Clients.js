
class Clients {
    constructor(name, email, document, phone, address, campaign, observations) {
        this.name = Clients.validNome(name),
        this.email = Clients.validEmail(email),
        this.document = Clients.validDocument(document),
        this.phone = phone,
        this.address = address,
        this.campaign = campaign,
        this.observations = observations
    }

    static validNome(value) {
        if (value.length >= 3) {
            console.log("if linha 14")
            return value 
        } else{
            throw new Error("Le champ du nom doit comporter au moins 3 caractères.")
        }
    }

    static validEmail(email) {
        const regex =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    
      if (!regex.test(email.value)) {
          return email
      } else {
          throw new Error ("S'il vous plaît, mettez une adresse email valide!")
      }
    }

    static validDocument(value) {
        if(value.length === 11){
        console.log("if linha 34")
            return value
        }else {
            throw new Error ("Entrez un CPF valide, utilisez uniquement des chiffres !")
        }
    }


}

module.exports = Clients


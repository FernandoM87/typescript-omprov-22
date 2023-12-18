###  DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel. 

Största skillnaden är att Type är stängda mellan  Interface inte och det betyder att vi kan extendera interfaces genom attdeklarera den en andra gång. Type kan inte extenderar på samma sätt: 

**interface**

interface Bear  {
    animal: boolean;
};

interface Bear  {
    age: number;
}

**type**

type Dog = {
    color: string;
}

type Dog =  {
    toys: number;
}

I  type  kommer vi få ett fel meddelande för att försöka deklarera och expandera data för variabel som redan har deklarerat. 
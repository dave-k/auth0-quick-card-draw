export enum Suit {
  clubs,
  diamonds,
  hearts,
  spades
}

export namespace Suit {
  
  export function options():{}[] {
    let options:{}[] = [];
    
    for(var s =0; s < 4; ++s) { 
      options.push({ id: <Number>s, value: <string>Suit[s] }); 
    }
    return options;
  }
  
}

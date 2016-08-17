/**
 * To format string wtih array's values
 * 
 * texte the string to format
 * valeurs values for replace in string
 * return texte if an error occurs
 * 
 * exemple "toto {0} ans." with [26,3,4] -> "toto a 26 ans"
 * see test_formatter.js for more details
 */
function formatString(texte,valeurs){
    var resultat=[];
    var indiceValeur;
    var indiceTexte=0;
    for(indiceTexte=0;indiceTexte<texte.length;indiceTexte++){
        if(texte[indiceTexte]!='{' && texte[indiceTexte]!="'"){
            resultat.push(texte[indiceTexte]);
        }else if(texte[indiceTexte]=="'"){
            if(indiceTexte+1<texte.length && texte[indiceTexte+1]=="'"){
                resultat.push("'");
                indiceTexte++;
            }else{
                indiceTexte++;
                var temp="";
                while(indiceTexte<texte.length && texte[indiceTexte]!="'"){
                    temp+=texte[indiceTexte];
                    indiceTexte++;
                }
                resultat.push(temp);
            }
        }else{
            indiceTexte++;
            indiceValeur="";
            while(texte[indiceTexte]!='}'){
                if(isNaN(texte[indiceTexte])){
                    //console.error("error:the format is not correct");
                    return texte;
                }
                indiceValeur+=texte[indiceTexte];
                indiceTexte++;
                if(indiceTexte>=texte.length){
                    //console.error("error:the string is incorrectly formatted");
                    return texte;
                }
            }
            indiceValeur=parseInt(indiceValeur,10);
            if(indiceValeur>=valeurs.length){
                //console.error("error:the index ["+indiceValeur+"] is invalid");
                return texte;
            }
            resultat.push(valeurs[indiceValeur]);
        }
    }
    return resultat.join("");
}

if(typeof exports !== 'undefined' && exports){
    exports.formatString = formatString;
}

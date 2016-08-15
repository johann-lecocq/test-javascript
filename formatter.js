/**
 * To format string wtih array's values
 * 
 * texte the string to format
 * valeurs values for replace in string
 * return null if an error occurs
 * 
 * exemple "toto {0} ans." with [26,3,4] -> "toto a 26 ans"
 * 
 */
function formatString(texte,valeurs){
    var resultat="";
    var indice_valeur;
    var indice_texte=0;
    for(indice_texte=0;indice_texte<texte.length;indice_texte++){
        if(texte[indice_texte]!='{'){
            resultat+=texte[indice_texte];
        }else{
            indice_texte++;
            indice_valeur="";
            while(texte[indice_texte]!='}'){
                if(isNaN(texte[indice_texte])){
                    //console.error("error:the format is not correct");
                    return null;
                }
                indice_valeur+=texte[indice_texte];
                indice_texte++;
                if(indice_texte>=texte.length){
                    //console.error("error:the string is incorrectly formatted");
                    return null;
                }
            }
            indice_valeur=parseInt(indice_valeur,10);
            if(indice_valeur>=valeurs.length){
                //console.error("error:the index ["+indice_valeur+"] is invalid");
                return null;
            }
            resultat+=valeurs[indice_valeur];
        }
    }
    return resultat;
}

exports.formatString = formatString;

var miArreglo=[3,54,34,1,0,2,12,29,5];
var miOrden=[];
var mayor=0;
var indice=0;


for (i=0;i<miArreglo.length;i++) {
        for (ind=0;ind < miArreglo.length;ind++){
            if (miArreglo[ind] > miArreglo[ind+1]) {
                if (mayor <  miArreglo[ind]) {
                    mayor=miArreglo[ind];
                    indice=ind;
                }         
            } else {
                if (mayor <  miArreglo[ind+1]) {

                    mayor = miArreglo[ind+1];
                    indice=ind+1;
                    
                }    
            }
            
            //console.log(indice);
            
        }
        miArreglo[indice]=0;
        miOrden[i]=mayor;
        mayor=0;
        console.log(miOrden[i]);
 }
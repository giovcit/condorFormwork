import '../../../globals';
export const getCategorySoluzioni = async () => {
    const response = await fetch(CATEGORY_SOLUZIONI_API+'?_fields[]=id&_fields[]=name&_fields[]=acf');
            if(!response.ok) {
                // oups! something went wrong
                console.log(response);
                return;
            }
   
            const newSoluzioni = await response.json();
            //console.log('SOL: '+JSON.stringify(soluzioni));

            for (var s in newSoluzioni){
                const response = await fetch(MEDIA_API+'/'+newSoluzioni[s].acf.main_image+'?_fields[]=id&_fields[]=media_details');
                if(!response.ok) {
                  // oups! something went wrong
                  console.log(response);
                  return;
                }
                //console.log('RESPONSE:'+response);
                const m = await response.json();
                newSoluzioni[s].featuredImage = UPLOADS_DIR+'/'+m.media_details.file;
                //console.log(JSON.stringify(newSoluzioni[s]))
                const responseIcon = await fetch(MEDIA_API+'/'+newSoluzioni[s].acf.main_solution_icon+'?_fields[]=id&_fields[]=media_details');
                if(!responseIcon.ok) {
                  // oups! something went wrong
                  console.log(responseIcon);
                  return;
                }
                //console.log('RESPONSE:'+response);
                const icon = await responseIcon.json();
                newSoluzioni[s].iconImage = UPLOADS_DIR+'/'+icon.media_details.file;
                //console.log(JSON.stringify(newSoluzioni[s]))
            }
        
            return await newSoluzioni;
}

export const getProdottiSoluzioni = async () => {
    const response = await fetch(PRODOTTI_SOLUZIONI_API+'?per_page=100&_fields[]=id&_fields[]=title&_fields[]=featured_media');
            if(!response.ok) {
                // oups! something went wrong
                console.log(response);
                return;
            }
   
            const newProdotti = await response.json();
            //console.log('SOL: '+JSON.stringify(prodotti));

            for (var s in newProdotti){
                const response = await fetch(MEDIA_API+'/'+newProdotti[s].featured_media+'?_fields[]=id&_fields[]=media_details');
                if(!response.ok) {
                  // oups! something went wrong
                  console.log(response);
                  return;
                }
                //console.log('RESPONSE:'+response);
                const m = await response.json();
                newProdotti[s].featuredImage = UPLOADS_DIR+'/'+m.media_details.file;
                //console.log(JSON.stringify(newProdotti[s]))
            }
        
            return await newProdotti;
}
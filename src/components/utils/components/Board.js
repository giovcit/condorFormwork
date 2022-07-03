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
            console.log('SOLUZIONI LOADED !!!');
            return await newSoluzioni;
}

export const getProgetti = async () => {
  const response = await fetch(PROGETTI_API+'?_fields[]=id&_fields[]=title&_fields[]=featured_media&_fields[]=content');
          if(!response.ok) {
              // oups! something went wrong
              console.log(response);
              return;
          }
 
          const newProgetti = await response.json();
          //console.log('SOL: '+JSON.stringify(progetti));

          for (var s in newProgetti){
              const response = await fetch(MEDIA_API+'/'+newProgetti[s].featured_media+'?_fields[]=id&_fields[]=media_details');
              if(!response.ok) {
                // oups! something went wrong
                console.log(response);
                return;
              }
              //console.log('RESPONSE:'+response);
              const m = await response.json();
              newProgetti[s].featuredImage = UPLOADS_DIR+'/'+m.media_details.file;
          }
          console.log('PROGETTI LOADED !!!');
          return await newProgetti;
}

export const getProdottiSoluzioni = async () => {
    const response = await fetch(PRODOTTI_SOLUZIONI_API+'?per_page=100&_fields[]=id&_fields[]=title&_fields[]=soluzioni&_fields[]=featured_media&_fields[]=acf&_fields[]=content');
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
                
                //var { main_gallery } = newProdotti[s].acf;
                //var listGallery = [];
                //for (g in main_gallery){
                  //console.log('GALLER: '+main_gallery[g]);
                  //const responseGallery = await fetch(MEDIA_API+'/'+main_gallery[g]+'?_fields[]=id&_fields[]=media_details');
                  //if(!responseGallery.ok) {
                  // oups! something went wrong
                  //console.log(responseGallery);
                  //return;
                  //}
                  //console.log('RESPONSE:'+response);
                  //const ga = await responseGallery.json();
                  //console.log(UPLOADS_DIR+'/'+ga.media_details.file);
                  //listGallery.push(UPLOADS_DIR+'/'+ga.media_details.file);
                //}
                //newProdotti[s].galleryImage = listGallery;
            }
            console.log('PRODOTTI LOADED !!!');
            return await newProdotti;
}
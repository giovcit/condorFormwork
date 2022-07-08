import { decode } from 'html-entities';
import moment from 'moment-timezone';
import '../../../globals';

const baseUrlOnLang = {
    en:BASE_URL_EN,
    it:BASE_URL,
    es:BASE_URL_ES,
    fr:BASE_URL_FR
}

export const getCategorySoluzioni = async (lang) => {
    var currentUrl = baseUrlOnLang[lang];

    const response = await fetch(currentUrl+CATEGORY_SOLUZIONI_API+'?_fields[]=id&_fields[]=name&_fields[]=acf');
    console.log(currentUrl+CATEGORY_SOLUZIONI_API+'?_fields[]=id&_fields[]=name&_fields[]=acf');

            if(!response.ok) {
                // oups! something went wrong
                console.log(response);
                return;
            }
   
            const newSoluzioni = await response.json();
            //console.log('SOL: '+JSON.stringify(soluzioni));

            for (var s in newSoluzioni){
                const response = await fetch(currentUrl+MEDIA_API+'/'+newSoluzioni[s].acf.main_image+'?_fields[]=id&_fields[]=source_url');
                if(!response.ok) {
                  // oups! something went wrong
                  console.log(response);
                  return;
                }
                //console.log('RESPONSE:'+response);
                const m = await response.json();
                newSoluzioni[s].featuredImage = currentUrl+'/'+m.source_url;
                //console.log(JSON.stringify(newSoluzioni[s]))
                const responseIcon = await fetch(currentUrl+MEDIA_API+'/'+newSoluzioni[s].acf.main_solution_icon+'?_fields[]=id&_fields[]=media_details');
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

export const getBlog = async (lang) => {
  var currentUrl = baseUrlOnLang[lang];

  const response = await fetch(currentUrl+BLOG_API+'&per_page=20&_fields[]=id&_fields[]=title&_fields[]=featured_media&_fields[]=content&_fields[]=excerpt&_fields[]=date');
          if(!response.ok) {
              // oups! something went wrong
              console.log(response);
              return;
          }
 
          const newBlog = await response.json();
          //console.log('SOL: '+JSON.stringify(newBlog));

          for (var s in newBlog){
              const response = await fetch(currentUrl+MEDIA_API+'/'+newBlog[s].featured_media+'?_fields[]=id&_fields[]=source_url');
              if(!response.ok) {
                // oups! something went wrong
                console.log(response);
                return;
              }
              //console.log('RESPONSE:'+response);
              const b = await response.json();
              newBlog[s].featuredImage = currentUrl+'/'+b.source_url;
              newBlog[s].title.rendered = decode(newBlog[s].title.rendered);
              let newDate = moment(newBlog[s].date).utcOffset(newBlog[s].date);
              newBlog[s].date = newDate.format('DD/MM/YYYY');
          }
          console.log('BLOG LOADED !!!');
          return await newBlog;
}

export const getProgetti = async (lang) => {
  var currentUrl = baseUrlOnLang[lang];
  const response = await fetch(currentUrl+PROGETTI_API+'?_fields[]=id&_fields[]=title&_fields[]=featured_media&_fields[]=content');
          if(!response.ok) {
              // oups! something went wrong
              console.log(response);
              return;
          }
 
          const newProgetti = await response.json();
          //console.log('SOL: '+JSON.stringify(progetti));

          for (var s in newProgetti){
              const response = await fetch(currentUrl+MEDIA_API+'/'+newProgetti[s].featured_media+'?_fields[]=id&_fields[]=source_url');
              if(!response.ok) {
                // oups! something went wrong
                console.log(response);
                return;
              }
              //console.log('RESPONSE:'+response);
              const m = await response.json();
              newProgetti[s].featuredImage = currentUrl+'/'+m.source_url;
              newProgetti[s].title.rendered = decode(newProgetti[s].title.rendered);
          }
          console.log('PROGETTI LOADED !!!');
          return await newProgetti;
}

export const getProdottiSoluzioni = async (lang) => {
    var currentUrl = baseUrlOnLang[lang];

    const response = await fetch(currentUrl+PRODOTTI_SOLUZIONI_API+'?per_page=100&_fields[]=id&_fields[]=title&_fields[]=soluzioni&_fields[]=featured_media&_fields[]=acf&_fields[]=content');
            if(!response.ok) {
                // oups! something went wrong
                console.log(response);
                return;
            }
   
            const newProdotti = await response.json();
            //console.log('SOL: '+JSON.stringify(prodotti));

            for (var s in newProdotti){
                const response = await fetch(currentUrl+MEDIA_API+'/'+newProdotti[s].featured_media+'?_fields[]=id&_fields[]=source_url');
                if(!response.ok) {
                  // oups! something went wrong
                  console.log(response);
                  return;
                }
                //console.log('RESPONSE:'+response);
                const m = await response.json();
                newProdotti[s].featuredImage = currentUrl+'/'+m.source_url;
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
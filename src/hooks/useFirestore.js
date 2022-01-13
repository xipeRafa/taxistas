import { useEffect, useState } from 'react';
import { firestoreApp } from '../config/firebase';

export const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  const [docss, setDocss] = useState([]);
  const [docsss, setDocsss] = useState([]);


  useEffect(() => {
      firestoreApp.collection(collection).get().then((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });

      setDocs(documents);
    });

  
    
     
    let oneDay = 86400000

    let ayer = Number(collection.slice(0, -2))-oneDay

      firestoreApp.collection(ayer.toString()+'si').get().then((snap) => {
      let documentss = [];
      snap.forEach((doc) => {
        documentss.push({ ...doc.data(), id: doc.id });
      });

      setDocss(documentss);
    });


      firestoreApp.collection('auctions').get().then((snap) => {
      let documentsss = [];
      snap.forEach((doc) => {
        documentsss.push({ ...doc.data(), id: doc.id });
      });

      setDocsss(documentsss);
    });

  }, [collection]);



  return { docs, docss, docsss };
};

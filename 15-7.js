const facebookProfiles = [
    { firstName: "Akash", lastName: "Agarwal", location: "rampur", },
     { firstName: "Pritesh", lastName: "Kumar", location: "gurgaon", }, 
     { firstName: "Sabiha", lastName: "Khan", location: "gurgaon", },
      { firstName: "Suyash", lastName: "Kashyap", location: "alwar", }, 
      { firstName: "Jay", location: "gurgaon", }, ];
        function filtername(person) {
       if (person.location==="gurgaon") {
         return true
       } else {
         return false
       }
     }
     const gurgaonpeople=facebookProfiles.filter(filtername)
     console.log(gurgaonpeople)
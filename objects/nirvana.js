var kurt = {name: "kurt cobain", instrument: "guitar", original: true, foo: false}
var dave = {name:"dave grohl", instrument: "Drums", original:false, foo:true}

nirvana = [kurt, dave]

for(var i = 0; i < nirvana.length; i++){
  if(nirvana[i].original === true){
    var string = "not "
    }else{
    var string = ""
    }
    console.log(nirvana[i].name + "played" + nirvana[i].instrument + " and is " + string +  "an original member")
}

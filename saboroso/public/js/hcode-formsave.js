HTMLFormElement.prototype.save = function(){
    let form = this;

    return new Promise((resolve,reject)=>{
        
        form.addEventListener('submit', e =>{
        
            e.preventDefault()
            console.log('cheouyuuuuuu')
            let formData = new FormData(form);
    
            fetch(form.action, {
                method: form.method,
                body: formData
            })
                .then(response => response.json())
                .then(json =>{
                        resolve(json);
                }).catch(err=> {

                    reject(err);

                }); 
        });

    });

}
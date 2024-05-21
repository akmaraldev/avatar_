const url = "https://last-airbender-api.fly.dev/api/v1/characters?name=";



const search = () => {
    const value = document.getElementById("input").value;
    
    fetch(url + value)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            // const main = document.querySelector(".main");
            // const character = document.createElement('div');
            const result = document.querySelector(".result");
            result.innerHTML = '';

            json.forEach((el) => {
                const item = document.createElement('div');
                item.classList.add('item');
            
                item.innerHTML = `
                    <img src="${el.photoUrl}" alt="${el.name}">
                    <div class="text-content">
                        <h4>${el.name}</h4>
                        <p>${el.affiliation}</p>
                    </div>
                `;
            
                // result.style.paddingLeft = '100px';
                // result.style.paddingTop = '80px';
            
                result.appendChild(item);
            });
        })
        .catch(error => console.log(error))
}

const btn = document.getElementById("btn");
btn.addEventListener('click', search)
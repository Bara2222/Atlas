const staty = document.getElementById('staty');

fetch('https://restcountries.com/v3.1/region/europe')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach(stat => {
            let blockCountry = ` 
            <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6 my-4">
            <div class="card">
                <a href="${stat.maps.googleMaps}">
                <img class="card-img-top" src="${stat.flags.png}" 
                alt="${stat.name.official}" />
            </a>
                <div class="card-body">
                    <h4 class="card-title">${stat.translations.ces.common}</h4>
                    <p class="card-text">Počet obyvatel: ${stat.population}
                        <br>Rozloha: ${stat.area}km<sup>2</sup>
                    </p>
                    
                </div>
                </div>
            </div>`;
            staty.innerHTML += blockCountry;
        });

        //staty.innerHTML = data[9].translations.ces.common;
    });

    fetch('https://restcountries.com/v3.1/region/asia')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach(stat => {
            let blockCountry = ` 
            <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6 my-4">
            <div class="card">
                <a href="${stat.maps.googleMaps}">
                <img class="card-img-top" src="${stat.flags.png}" 
                alt="${stat.name.official}" />
            </a>
                <div class="card-body">
                    <h4 class="card-title">${stat.translations.ces.common}</h4>
                    <p class="card-text">Počet obyvatel: ${stat.population}
                        <br>Rozloha: ${stat.area}km<sup>2</sup>
                    </p>
                    
                </div>
                </div>
            </div>`;
            staty.innerHTML += blockCountry;
        });

        //staty.innerHTML = data[9].translations.ces.common;
    });

    fetch('https://restcountries.com/v3.1/region/africa')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach(stat => {
            let blockCountry = ` 
            <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6 my-4">
            <div class="card">
                <a href="${stat.maps.googleMaps}">
                <img class="card-img-top" src="${stat.flags.png}" 
                alt="${stat.name.official}" />
            </a>
                <div class="card-body">
                    <h4 class="card-title">${stat.translations.ces.common}</h4>
                    <p class="card-text">Počet obyvatel: ${stat.population}
                        <br>Rozloha: ${stat.area}km<sup>2</sup>
                    </p>
                    
                </div>
                </div>
            </div>`;
            staty.innerHTML += blockCountry;
        });

        //staty.innerHTML = data[9].translations.ces.common;
    });

    fetch('https://restcountries.com/v3.1/region/america')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach(stat => {
            let blockCountry = ` 
            <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6 my-4">
            <div class="card">
                <a href="${stat.maps.googleMaps}">
                <img class="card-img-top" src="${stat.flags.png}" 
                alt="${stat.name.official}" />
            </a>
                <div class="card-body">
                    <h4 class="card-title">${stat.translations.ces.common}</h4>
                    <p class="card-text">Počet obyvatel: ${stat.population}
                        <br>Rozloha: ${stat.area}km<sup>2</sup>
                    </p>
                    
                </div>
                </div>
            </div>`;
            staty.innerHTML += blockCountry;
        });

        //staty.innerHTML = data[9].translations.ces.common;
    });

    fetch('https://restcountries.com/v3.1/region/oceania')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach(stat => {
            let blockCountry = ` 
            <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6 my-4">
            <div class="card">
                <a href="${stat.maps.googleMaps}">
                <img class="card-img-top" src="${stat.flags.png}" 
                alt="${stat.name.official}" />
            </a>
                <div class="card-body">
                    <h4 class="card-title">${stat.translations.ces.common}</h4>
                    <p class="card-text">Počet obyvatel: ${stat.population}
                        <br>Rozloha: ${stat.area}km<sup>2</sup>
                    </p>
                    
                </div>
                </div>
            </div>`;
            staty.innerHTML += blockCountry;
        });

        //staty.innerHTML = data[9].translations.ces.common;
    });
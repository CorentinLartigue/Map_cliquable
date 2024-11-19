document.addEventListener("DOMContentLoaded", function() {
    const mapImage = document.getElementById('france-map');
    const mapElement = document.getElementById('image-map');

    const originalWidth = 493;
    const originalHeight = 493;

    const regions = [
        { name: 'Nouvelle-Aquitaine', coords: [216, 264, 158, 348], link: 'https://www.nouvelle-aquitaine.fr/' },
        { name: 'Occitanie', coords: [218, 362, 292, 402], link: 'https://www.laregion.fr/' },
        { name: 'Grand-Est', coords: [325, 132, 397, 170], link: 'https://www.grandest.fr/' },
        { name: 'Île-de-France', coords: [251, 136, 279, 170], link: 'https://www.iledefrance.fr/' },
        { name: 'Bretagne', coords: [121, 158, 83, 191], link: 'https://www.bretagne.bzh/' },
        { name: 'Normandie', coords: [212, 122, 174, 155], link: 'https://www.normandie.fr/' },
        { name: 'Hauts-de-France', coords: [286, 70, 248, 103], link: 'https://www.hautsdefrance.fr/' },
        { name: 'Centre-Val-de-Loire', coords: [249, 197, 211, 230], link: 'https://www.centre-valdeloire.fr/' },
        { name: 'Bourgogne-Franche-Comté', coords: [347, 209, 309, 242], link: 'https://www.bourgognefranchecomte.fr/' },
        { name: 'Auvergne-Rhône-Alpes', coords: [340, 284, 302, 317], link: 'https://www.auvergnerhonealpes.fr/' },
        { name: 'Provence-Alpes-Côte-d\'Azur', coords: [401, 362, 363, 395], link: 'https://www.prefectures-regions.gouv.fr/provence-alpes-cote-dazur' },
        { name: 'Corse', coords: [454, 418, 416, 451], link: 'https://www.prefectures-regions.gouv.fr/corse/' },
        { name: 'Pays-de-la-Loire', coords: [181, 182, 143, 215], link: 'https://www.paysdelaloire.fr/' }
    ];

    function adjustAreas() {
        const mapWidth = mapImage.clientWidth; 
        const mapHeight = mapImage.clientHeight;

        mapElement.innerHTML = '';

        regions.forEach(region => {
            const [x1, y1, x2, y2] = region.coords;

            const coords = [
                (x1 / originalWidth) * mapWidth, 
                (y1 / originalHeight) * mapHeight, 
                (x2 / originalWidth) * mapWidth, 
                (y2 / originalHeight) * mapHeight 
            ];

            const area = document.createElement('area');
            area.shape = 'rect';
            area.coords = `${coords[0]},${coords[1]},${coords[2]},${coords[3]}`; 
            area.href = region.link;
            area.alt = region.name;

        
            mapElement.appendChild(area);
        });
    }

    window.addEventListener('resize', adjustAreas);
    mapImage.addEventListener('load', adjustAreas);

    adjustAreas();
});

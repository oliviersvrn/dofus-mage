const runes_infos = {
    'sink': { 'weight': 1, 'values': [], 'images': [], 'name': 'Puits', 'runeName': [] },
    'ini': { 'weight': 0.1, 'values': [10, 30, 100], 'images': ['img/78025.png', 'img/78026.png', 'img/78027.png'], 'name': 'Initiative', 'runeName': ['Ini', 'Pa Ini', 'Ra Ini'] },
    'vi': { 'weight': 0.2, 'values': [5, 15, 50], 'images': ['img/78052.png', 'img/78053.png', 'img/78054.png'], 'name': 'Vitalité', 'runeName': ['Vi', 'Pa Vi', 'Ra Vi'] },
    'age': { 'weight': 1, 'values': [1, 3, 10], 'images': ['img/78046.png', 'img/78047.png', 'img/78048.png'], 'name': 'Agilité', 'runeName': ['Age', 'Pa Age', 'Ra Age'] },
    'cha': { 'weight': 1, 'values': [1, 3, 10], 'images': ['img/78040.png', 'img/78041.png', 'img/78042.png'], 'name': 'Chance', 'runeName': ['Cha', 'Pa Cha', 'Ra Cha'] },
    'fo': { 'weight': 1, 'values': [1, 3, 10], 'images': ['img/78043.png', 'img/78044.png', 'img/78045.png'], 'name': 'Force', 'runeName': ['Fo', 'Pa Fo', 'Ra Fo'] },
    'ine': { 'weight': 1, 'values': [1, 3, 10], 'images': ['img/78037.png', 'img/78038.png', 'img/78039.png'], 'name': 'Intelligence', 'runeName': ['Ine', 'Pa Ine', 'Ra Ine'] },
    'pui': { 'weight': 2, 'values': [1, 3, 10], 'images': ['img/78016.png', 'img/78016.png', 'img/78016.png'], 'name': 'Puissance', 'runeName': ['Pui', 'Pa Pui', 'Ra Pui'] },
    'sa': { 'weight': 3, 'values': [1, 3, 10], 'images': ['img/78049.png', 'img/78050.png', 'img/78051.png'], 'name': 'Sagesse', 'runeName': ['Sa', 'Pa Sa', 'Ra Sa'] },
    'prospe': { 'weight': 3, 'values': [1, 3], 'images': ['img/78036.png', 'img/78036.png'], 'name': 'Prospection', 'runeName': ['Prospe', 'Pa Prospe'] },
    'pod': { 'weight': 0.25, 'values': [10, 30, 100], 'images': ['img/78020.png', 'img/78021.png', 'img/78022.png'], 'name': 'Pod', 'runeName': ['Pod', 'Pa Pod', 'Ra Pod'] },
    'do': { 'weight': 20, 'values': [1], 'images': ['img/78015.png'], 'name': 'Dommage', 'runeName': ['Do'] },
    'do-air': { 'weight': 5, 'values': [1, 3], 'images': ['img/78067.png', 'img/78068.png'], 'name': 'Dommage air', 'runeName': ['Do Air', 'Pa Do Air'] },
    'do-eau': { 'weight': 5, 'values': [1, 3], 'images': ['img/78061.png', 'img/78062.png'], 'name': 'Dommage eau', 'runeName': ['Do Eau', 'Pa Do Eau'] },
    'do-terre': { 'weight': 5, 'values': [1, 3], 'images': ['img/78065.png', 'img/78066.png'], 'name': 'Dommage terre', 'runeName': ['Do Terre', 'Pa Do Terre'] },
    'do-feu': { 'weight': 5, 'values': [1, 3], 'images': ['img/78063.png', 'img/78064.png'], 'name': 'Dommage feu', 'runeName': ['Do Feu', 'Pa Do Feu'] },
    'do-neutre': { 'weight': 5, 'values': [1, 3], 'images': ['img/78069.png', 'img/78070.png'], 'name': 'Dommage neutre', 'runeName': ['Do Neutre', 'Pa Do Neutre'] },
    'do-cri': { 'weight': 5, 'values': [1, 3], 'images': ['img/78073.png', 'img/78074.png'], 'name': 'Dommage critiques', 'runeName': ['Do Cri', 'Pa Do Cri'] },
    'do-pou': { 'weight': 5, 'values': [1, 3], 'images': ['img/78081.png', 'img/78082.png'], 'name': 'Dommage poussée', 'runeName': ['Do Pour', 'Pa Do Pour'] },
    'do-ren': { 'weight': 5, 'values': [1], 'images': ['img/78017.png'], 'name': 'Renvoi de dommage', 'runeName': ['Do Ren'] },
    'pi-per': { 'weight': 2, 'values': [1, 3, 10], 'images': ['img/78024.png', 'img/78024.png', 'img/78024.png'], 'name': 'Puissance (pièges)', 'runeName': ['Pi Per', 'Pa Pi Per', 'Ra Pi Per'] },
    'pi': { 'weight': 5, 'values': [1, 3], 'images': ['img/78023.png', 'img/78023.png'], 'name': 'Dommage piège', 'runeName': ['Do Pi', 'Pa Do Pi'] },
    're-per-air': { 'weight': 6, 'values': [1], 'images': ['img/78033.png'], 'name': '% Résistance air', 'runeName': ['Ré Per Air'] },
    're-per-eau': { 'weight': 6, 'values': [1], 'images': ['img/78031.png'], 'name': '% Résistance eau', 'runeName': ['Ré Per Eau'] },
    're-per-terre': { 'weight': 6, 'values': [1], 'images': ['img/78035.png'], 'name': '% Résistance terre', 'runeName': ['Ré Per Terre'] },
    're-per-feu': { 'weight': 6, 'values': [1], 'images': ['img/78029.png'], 'name': '% Résistance feu', 'runeName': ['Ré per Feu'] },
    're-per-neutre': { 'weight': 6, 'values': [1], 'images': ['img/78058.png'], 'name': '% Résistance neutre', 'runeName': ['Ré Per Neutre'] },
    're-air': { 'weight': 2, 'values': [1, 3], 'images': ['img/78032.png', 'img/78100.png'], 'name': 'Résistance air', 'runeName': ['Ré Air', 'Pa Ré Air'] },
    're-eau': { 'weight': 2, 'values': [1, 3], 'images': ['img/78030.png', 'img/78101.png'], 'name': 'Résistance eau', 'runeName': ['Ré Eau', 'Pa Ré Eau'] },
    're-terre': { 'weight': 2, 'values': [1, 3], 'images': ['img/78034.png', 'img/78104.png'], 'name': 'Résistance terre', 'runeName': ['Ré Terre', 'Pa Ré Terre'] },
    're-feu': { 'weight': 2, 'values': [1, 3], 'images': ['img/78028.png', 'img/78102.png'], 'name': 'Résistance feu', 'runeName': ['Ré Feu', 'Pa Ré Feu'] },
    're-neutre': { 'weight': 2, 'values': [1, 3], 'images': ['img/78057.png', 'img/78103.png'], 'name': 'Résistance neutre', 'runeName': ['Ré Neutre', 'Pa Ré Neutre'] },
    're-cri': { 'weight': 2, 'values': [1, 3], 'images': ['img/78071.png', 'img/78072.png'], 'name': 'Résistance critiques', 'runeName': ['Ré Cri', 'Pa Ré Cri'] },
    're-pou': { 'weight': 2, 'values': [1, 3], 'images': ['img/78079.png', 'img/78080.png'], 'name': 'Résistance poussée', 'runeName': ['Ré Pou', 'Pa Ré Pou'] },
    'do-per-ar': { 'weight': 15, 'values': [1], 'images': ['img/78093.png'], 'name': '% Dommage d\'armes', 'runeName': ['Do Per Ar'] },
    'do-per-so': { 'weight': 15, 'values': [1], 'images': ['img/78094.png'], 'name': '% Dommage sorts', 'runeName': ['Do Per So'] },
    'do-per-me': { 'weight': 15, 'values': [1], 'images': ['img/78092.png'], 'name': '% Dommage mêlée', 'runeName': ['Do Per Mé'] },
    'do-per-di': { 'weight': 15, 'values': [1], 'images': ['img/78091.png'], 'name': '% Dommage distance', 'runeName': ['Do Per Di'] },
    're-per-me': { 'weight': 15, 'values': [1], 'images': ['img/78095.png'], 'name': '% Résistance mêlée', 'runeName': ['Ré Per Mé'] },
    're-per-di': { 'weight': 15, 'values': [1], 'images': ['img/78096.png'], 'name': '% Résistance distance', 'runeName': ['Ré Per Di'] },
    'fui': { 'weight': 4, 'values': [1, 3], 'images': ['img/78076.png', 'img/78075.png'], 'name': 'Fuite', 'runeName': ['Fui', 'Pa Fui'] },
    'tac': { 'weight': 4, 'values': [1, 3], 'images': ['img/78077.png', 'img/78078.png'], 'name': 'Tacle', 'runeName': ['Tac', 'Pa Tac'] },
    'ret-pa': { 'weight': 7, 'values': [1, 3], 'images': ['img/78087.png', 'img/78088.png'], 'name': 'Retrait PA', 'runeName': ['Ret Pa', 'Pa Ret Pa'] },
    'ret-pme': { 'weight': 7, 'values': [1, 3], 'images': ['img/78089.png', 'img/78090.png'], 'name': 'Retrait PM', 'runeName': ['Ret Pme', 'Pa Ret Pme'] },
    're-pa': { 'weight': 7, 'values': [1, 3], 'images': ['img/78083.png', 'img/78084.png'], 'name': 'Esquive PA', 'runeName': ['Ré Pa', 'Pa Ré Pa'] },
    're-pme': { 'weight': 7, 'values': [1, 3], 'images': ['img/78085.png', 'img/78086.png'], 'name': 'Esquive PM', 'runeName': ['Ré Pme', 'Pa Ré Pme'] },
    'cri': { 'weight': 10, 'values': [1], 'images': ['img/78014.png'], 'name': 'Critique', 'runeName': ['Cri'] },
    'so': { 'weight': 10, 'values': [1, 3], 'images': ['img/78013.png', 'img/78099.png'], 'name': 'Soin', 'runeName': ['So', 'Pa So'] },
    'invo': { 'weight': 30, 'values': [1], 'images': ['img/78019.png'], 'name': 'Invocation', 'runeName': ['Invo'] },
    'po': { 'weight': 51, 'values': [1], 'images': ['img/78018.png'], 'name': 'Portée', 'runeName': ['Po'] },
    'pme': { 'weight': 90, 'values': [1], 'images': ['img/78056.png'], 'name': 'PM', 'runeName': ['Ga Pme'] },
    'pa': { 'weight': 100, 'values': [1], 'images': ['img/78055.png'], 'name': 'PA', 'runeName': ['Ga Pa'] },
    'chasse': { 'weight': 5, 'values': [1], 'images': ['img/78059.png'], 'name': 'Arme de chasse', 'runeName': ['Rune de chasse'] }
}

const priorities = [
    'over',
    'sink',
    'normal',
    'negative',
    'used'
];

window.onload = (event) => {
    fillInventory();
    addHoverEvent();
};

function _onMouseMove(event) {
    const tooltip = document.querySelector('.tooltip');
    tooltip.style.display = 'inline';
    tooltip.querySelector('.name').textContent = event.target.dataset.name;
    tooltip.querySelector('.effect > span').textContent = event.target.dataset.effect;
    tooltip.querySelector('.weight > span').textContent = event.target.dataset.weight;
    tooltip.style.left = event.clientX;
    tooltip.style.top = event.clientY;
};

function _onMouseLeave() {
    const tooltip = document.querySelector('.tooltip');
    tooltip.style.display = 'none';
};

function addHoverEvent() {
    document.querySelectorAll('img.rune, td.rune img').forEach(el => {
        // el.removeEventListener('mousemove', _onMouseMove);
        // el.removeEventListener('mouseleave', _onMouseLeave);
        el.addEventListener('mousemove', _onMouseMove)
        el.addEventListener('mouseleave', _onMouseLeave)
    })
}

function setAttributes(el, attrs) {
    for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

function shuffleArrayInPlace(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getItemEffects() {
    let effects = [];
    let tr_effects = document.querySelectorAll('tr.stats-line');
    tr_effects.forEach(tr_effect => {
        const name = tr_effect.getAttribute('data-type');
        const value = parseInt(tr_effect.querySelector('.effect').innerHTML, 10);
        const min = parseInt(tr_effect.querySelector('.min').innerHTML, 10) || 0;
        const max = parseInt(tr_effect.querySelector('.max').innerHTML, 10) || 0;
        effects.push({
            name,
            value,
            min,
            max,
            weight: {
                unit: runes_infos[name]['weight'],
                value: runes_infos[name]['weight'] * value,
                min: runes_infos[name]['weight'] * min,
                max: runes_infos[name]['weight'] * max
            },
            result: ''
        });
    });
    console.log(JSON.parse(JSON.stringify(effects)));
    return effects;
}

function createEffect(name, value) {
    return {
        name,
        value,
        min: 0,
        max: 0,
        weight: {
            unit: runes_infos[name]['weight'],
            value: runes_infos[name]['weight'] * value,
            min: 0,
            max: 0
        },
        result: ''
    }
}

function setItemEffects(effects) {
    let new_table = document.createElement('tbody');
    effects.forEach(effect => {
        let state = '';

        if (effect.name !== 'sink') {
            if (effect.min === 0 && effect.min === 0 && effect.value === 0)
                return;

            if (effect.value < 0)                                  state = 'negative';
            else if (effect.value > effect.max && effect.max > 0)  state = 'over';
            else if (effect.value > effect.max && effect.max <= 0) state = 'exo';
        }

        const rune = runes_infos[effect.name];

        let tr = document.createElement('tr');
        setAttributes(tr, { 'class': `stats-line ${state} ${effect.result}`, 'data-type': effect.name });

        let td_min = document.createElement('td');    td_min.setAttribute('class', 'min');         tr.appendChild(td_min);
        let td_max = document.createElement('td');    td_max.setAttribute('class', 'max');         tr.appendChild(td_max);
        let td_effect = document.createElement('td'); td_effect.setAttribute('class', 'effect');   tr.appendChild(td_effect);
        let td_name = document.createElement('td');   td_name.setAttribute('class', 'stat-name');  tr.appendChild(td_name);
        let td_na = document.createElement('td');     td_na.setAttribute('class', 'rune rune-na'); tr.appendChild(td_na);
        let td_pa = document.createElement('td');     td_pa.setAttribute('class', 'rune rune-pa'); tr.appendChild(td_pa);
        let td_ra = document.createElement('td');     td_ra.setAttribute('class', 'rune rune-ra'); tr.appendChild(td_ra);

        const is_exo = effect.min === 0 && effect.max === 0;
        tr.querySelector('.min').textContent = is_exo ? '-' : effect.min;
        tr.querySelector('.max').textContent = is_exo ? '-' : effect.max;
        tr.querySelector('.effect').textContent = effect.value;
        tr.querySelector('.stat-name').textContent = rune.name;

        let img_rune_na = document.createElement('img');
        let img_rune_pa = document.createElement('img');
        let img_rune_ra = document.createElement('img');
        setAttributes(img_rune_na, { 'draggable': 'false', 'src': rune['images'][0] || '', 'alt': effect.name, 'onclick': `_onRuneClick('${effect.name}', 0)`, 'data-name': 'Rune ' + rune['runeName'][0], 'data-effect': '+' + rune['values'][0] + ' ' + rune['name'], 'data-weight': rune['values'][0] * rune['weight'] });
        setAttributes(img_rune_pa, { 'draggable': 'false', 'src': rune['images'][1] || '', 'alt': effect.name, 'onclick': `_onRuneClick('${effect.name}', 1)`, 'data-name': 'Rune ' + rune['runeName'][1], 'data-effect': '+' + rune['values'][1] + ' ' + rune['name'], 'data-weight': rune['values'][1] * rune['weight'] });
        setAttributes(img_rune_ra, { 'draggable': 'false', 'src': rune['images'][2] || '', 'alt': effect.name, 'onclick': `_onRuneClick('${effect.name}', 2)`, 'data-name': 'Rune ' + rune['runeName'][2], 'data-effect': '+' + rune['values'][2] + ' ' + rune['name'], 'data-weight': rune['values'][2] * rune['weight'] });
        if (rune['images'][0] !== undefined) tr.querySelector('.rune-na').appendChild(img_rune_na);
        if (rune['images'][1] !== undefined) tr.querySelector('.rune-pa').appendChild(img_rune_pa);
        if (rune['images'][2] !== undefined) tr.querySelector('.rune-ra').appendChild(img_rune_ra);

        new_table.appendChild(tr);
    });
    document.querySelector('div.stats tbody').replaceWith(new_table);
    addHoverEvent();
}

function fillInventory() {
    let new_table = document.createElement('tbody');
    for (const [name, rune] of Object.entries(runes_infos)) {
        if (name === 'sink')
            continue;

        let tr = document.createElement('tr');
        for (let i = 0; i < 3; i++) {
            if (i >= rune.values.length) {
                let td = document.createElement('td');
                tr.appendChild(td);
                continue;
            }
            let td = document.createElement('td');
            td.setAttribute('class', 'rune rune-' + ['na', 'pa', 'ra'][i])
            let img = document.createElement('img');
            setAttributes(img, { 'draggable': 'false', 'src': rune.images[i] || '', 'alt': name, 'onclick': `_onRuneClick('${name}', ${i})`, 'data-name': 'Rune ' + rune['runeName'][i], 'data-effect': '+' + rune['values'][i] + ' ' + rune['name'], 'data-weight': rune['values'][i] * rune['weight'] });
            td.appendChild(img);
            tr.appendChild(td);
        }
        let td = document.createElement('td');
        td.textContent = rune.name;
        tr.appendChild(td);
        new_table.appendChild(tr);
    }
    document.querySelector('div.inventory tbody').replaceWith(new_table);
}

function addHistory(success, line, rune) {
    let div = document.createElement('div');
    let text = document.createTextNode(line);
    let img = document.createElement('img');
    setAttributes(img, { 'draggable': 'false', 'class': 'rune', 'src': rune.image || '', 'alt': rune.name, 'data-name': 'Rune ' + runes_infos[rune.name].runeName[rune.level], 'data-effect': '+' + rune.value + ' ' + runes_infos[rune.name].name, 'data-weight': rune.weight });
    div.appendChild(img);
    div.appendChild(text);

    document.querySelector('div.history > div.box').appendChild(div);
    const history = document.querySelector('div.history');
    history.scrollTop = history.scrollHeight;
}

function generateItem() {
    let item = {
        name: 'Not implemented',
        effects: getItemEffects()
    }
    return item;
}

function _onRuneClick(effect, level) {
    const item = generateItem();
    const rune_infos = runes_infos[effect];
    const rune = {
        name: effect,
        value: rune_infos.values[level],
        weight: rune_infos.weight * rune_infos.values[level],
        image: rune_infos.images[level],
        level
    }
    if (!applyRune(item, rune)) {
        console.log('too heavy');
    }
    setItemEffects(item.effects);
}

function _onTransRuneClick(effect, level) {
    alert('not implemented');
}

function applyRune(item, rune) {
    const applicable = isRuneApplicable(item, rune);
    if (!applicable)
        return false;

    const success = getRuneSuccess(item, rune);
    let history = '';
    if (success === -1 || success === 0) {
        const results = calculateLosses(item, rune);
        for (const [name, loss] of Object.entries(results.losses)) {
            if (loss <= 0)
                continue;

            let effect = item.effects.find(effect => effect.name === name);
            effect.value -= loss;
            history += ' -' + loss + ' ' + runes_infos[name].name
            effect.result = 'failure';
        };
        let sink_effect = item.effects.find(effect => effect.name === 'sink');
        sink_effect.value += results.sink;
    }
    if (success === 0 || success === 1) {
        let effect = item.effects.find(effect => effect.name === rune.name);
        effect.value += rune.value;
        history += ' +' + rune.value + ' ' + runes_infos[rune.name].name
        effect.result = 'success';
    }
    addHistory(success, history, rune);

    return true;
}

function getRuneSuccess(item, rune) {
    const item_weight = 0;
    const item_weight_min = 0;
    const item_weight_max = 0;
    const weight_over = 0;
    const effect_weight = 0;
    const item_level = 0;
    const above_eigthy = false;
    const effect_is_over = false;
    const rune_weight = 0;

    return [-1, 0, 1][parseInt(Math.random() * 3)];
}

function calculateLosses(item, rune) {
    let weight_to_lose = rune.weight;
    let losses = {};
    const effects = sortEffects(item.effects, rune);

    /**
     * Notes:
     * - On peut perdre 6 vita/11 ini avec un SN/EC d'une rune qui pèse 1 (floating point error)
     * - Lorsqu'un item a un jet total faible, on peut faire un "echec neutre" qui ne fait pas perdre de stats
     * - Avec 451/450 vita, si on fait un SN/EC sur une ga pme, on perd toujours 450 vita
     * - Un SN/EC de rune PA ou PM sur un objet avec un jet "normal" fera perdre un peu de stats de plusieurs lignes
     * - Un SN/EC d'une rune légère sur un objet avec un jet "normal" fait souvent perdre 1 ou 2 types de stats mais pas +
     * - Il peut arriver (rare ?) qu'un SN fasse perdre des stats du même type que la rune
     * 
     * Suppositions:
     * - Lorsqu'il y a un over/exo présent, une rune qui pèse plus lourd que le poids unitaire de l'over/exo puisera dedans
     * 
     * Questions:
     * - Est-ce qu'un EC d'une rune peut faire perdre des stats du même type ?
     * - Est-ce qu'on peut faire un "echec neutre" si le poids de la rune passée est plus faible que le poids total de l'item ?
     * - Est-ce que la somme des pertes lors d'un SN/EC à l'exception de la stat perdue la plus lourde (x1) est toujours < au poids de la rune ?
     * - Est-ce que lors des pertes de stats, les over et exos ont la même priorité ?
     * - Est-ce qu'on peut ajouter un over de poids 1 à un item exo PA ? (cf: bug en bas de isRuneApplicable())
     */
    // priorities.forEach(type => {
        
    // });

    effects.forEach(effect => {
        if (losses[effect.name] === undefined) losses[effect.name] = 0;
        while (effect.weight.unit <= weight_to_lose
            && (
                (effect.value - (losses[effect.name] + 1) >= 0)
                || (effect.value - (losses[effect.name] + 1) >= effect.min)
            )
        ) {
            losses[effect.name]++;
            weight_to_lose -= effect.weight.unit;
        }
        if (weight_to_lose > 0
            && (
                (effect.value - (losses[effect.name] + 1) >= 0)
                || (effect.value - (losses[effect.name] + 1) >= effect.min)
            )
            && Math.random() < Math.min(0.5, rune.weight / effect.weight.unit)
        ) {
            losses[effect.name]++;
            weight_to_lose -= effect.weight.unit;
        }
        if (Math.abs(weight_to_lose) < 0.1) weight_to_lose = 0;
    });

    return {
        losses,
        sink: Math.abs(weight_to_lose)
    };
}

function sortEffects(effects, rune) {
    let sorted = {
        'over': [],
        'sink': [],
        'normal': [],
        'negative': [],
        'used': []
    };

    effects.forEach(effect => {
        if (effect.value <= 0 && effect.value <= effect.min)
            return;

        if (effect.name === rune.name) sorted['used'].push(effect);
        else if (effect.name === 'sink') sorted['sink'].push(effect);
        else if (effect.value > effect.max) sorted['over'].push(effect);
        else if (effect.value < 0 && effect.value <= effect.max) sorted['negative'].push(effect);
        else sorted['normal'].push(effect);
    });

    shuffleArrayInPlace(sorted['over']);
    shuffleArrayInPlace(sorted['sink']);
    shuffleArrayInPlace(sorted['normal']);
    shuffleArrayInPlace(sorted['negative']);
    shuffleArrayInPlace(sorted['used']);

    // return sorted;
    return sorted['over'].concat(sorted['sink']).concat(sorted['normal']).concat(sorted['negative']).concat(sorted['used']);
}

function isRuneApplicable(item, rune) {
    let item_effect = item.effects.find(effect => effect.name === rune.name);
    if (!item_effect) {
        item_effect = createEffect(rune.name, 0);
        item.effects.push(item_effect);
    }
    if (item_effect.weight.value + rune.weight <= item_effect.weight.max)
        return true;

    if (item_effect.weight.value + rune.weight > 101)
        return false;

    let weight_over = 0;
    item.effects.forEach(effect => {
        if (effect.name === 'sink')
            return;

        if (effect.value > effect.max) {
            weight_over += effect.weight.value - effect.weight.max;
        }
    });

    const rune_over = Math.min(rune.weight, rune.weight + item_effect.weight.value - item_effect.weight.max);
    if (weight_over + rune_over > 101)
        return false;

    // Bug dofus: Est-ce que le poids Over+Exo après le passage de la rune est supérieur au poids Over+Exo autorisé par l'effet
    const allowed_over = Math.max(0, 101 - item_effect.weight.max);
    console.log(weight_over, rune_over);
    if (weight_over + rune_over > allowed_over)
        return false;

    return true;
}

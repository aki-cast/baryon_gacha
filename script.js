const items = [
    { name: 'Quark A', image: 'Item6.jpg' ,probability: 0.01},
    { name: 'Quark B', image: 'Item5.jpg' ,probability: 0.01},
    { name: 'Quark C', image: 'Item4.jpg' ,probability: 0.05},
    { name: 'Quark D', image: 'Item3.jpg' ,probability: 0.05},
    { name: 'Quark E', image: 'Item2.jpg' ,probability: 0.44},
    { name: 'Quark F', image: 'Item1.jpg' ,probability: 0.44}
];
const resultSummaryCounter = {}; // ガチャ結果のカウンター

document.getElementById('pull-button').addEventListener('click', () => {
    const resultItems = document.querySelectorAll('.result-item');

    resultItems.forEach(item => {
        const randomValue = Math.random(); // 0から1のランダムな数値
        let cumulativeProbability = 0;
        let selectedItem = null;
        for (const item of items) {
            cumulativeProbability += item.probability;
            if (randomValue < cumulativeProbability) {
                selectedItem = item;
                break;
            }
        }
        item.querySelector('img').src = selectedItem.image;
        item.querySelector('img').alt = selectedItem.name;
    });
});

document.getElementById('pull-button').addEventListener('click', () => {
    const resultItems = document.querySelectorAll('.result-item');
    const resultImage = document.getElementById('result-image'); // 追加
    
    const itemCounts = {
        'Quark F': 0,
        'Quark E': 0,
        'Quark D': 0,
        'Quark C': 0,
        'Quark B': 0,
        'Quark A': 0
    };
    
    resultItems.forEach(item => {
        const randomValue = Math.random();
        let cumulativeProbability = 0;
        let selectedItem = null;
        
        for (const item of items) {
            cumulativeProbability += item.probability;
            if (randomValue < cumulativeProbability) {
                selectedItem = item;
                itemCounts[selectedItem.name] += 1; // アイテムの内訳を更新
                break;
            }
        }
        item.querySelector('img').src = selectedItem.image;
        item.querySelector('img').alt = selectedItem.name;
    });
    
    // アイテムの内訳に基づいて適切な画像を表示
    if (itemCounts['Quark F'] === 2 && itemCounts['Quark E'] === 1) {
        resultImage.src = 'ImageA.jpg';
        updateResultSummaryCounter('陽子'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark F'] === 1 && itemCounts['Quark E'] === 2) {
        resultImage.src = 'ImageB.jpg';
        updateResultSummaryCounter('中性子'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark F'] === 1 && itemCounts['Quark E'] === 1 && itemCounts['Quark D'] === 1) {
        resultImage.src = 'ImageC.jpg';
        updateResultSummaryCounter('ハイペロン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark F'] === 2 && itemCounts['Quark E'] === 0 && itemCounts['Quark D'] === 1) {
        resultImage.src = 'ImageD.jpg';
        updateResultSummaryCounter('ハイペロン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark F'] === 0 && itemCounts['Quark E'] === 2 && itemCounts['Quark D'] === 1) {
        resultImage.src = 'ImageD.jpg';
        updateResultSummaryCounter('ハイペロン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark F'] === 1 && itemCounts['Quark E'] === 0 && itemCounts['Quark D'] === 2) {
        resultImage.src = 'ImageE.jpg';
        updateResultSummaryCounter('ハイペロン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark F'] === 0 && itemCounts['Quark E'] === 1 && itemCounts['Quark D'] === 2) {
        resultImage.src = 'ImageE.jpg';
        updateResultSummaryCounter('ハイペロン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark F'] === 0 && itemCounts['Quark E'] === 0 && itemCounts['Quark D'] === 3) {
        resultImage.src = 'ImageF.jpg';
        updateResultSummaryCounter('ハイペロン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark F'] === 3 && itemCounts['Quark E'] === 0 && itemCounts['Quark D'] === 0) {
        resultImage.src = 'ImageG.jpg';
        updateResultSummaryCounter('デルタ粒子'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark F'] === 0 && itemCounts['Quark E'] === 3 && itemCounts['Quark D'] === 0) {
        resultImage.src = 'ImageG.jpg';
        updateResultSummaryCounter('デルタ粒子'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark E'] === 1 && itemCounts['Quark D'] === 1 && itemCounts['Quark A'] === 1) {
        resultImage.src = 'ImageH.jpg';
        updateResultSummaryCounter('カスケードB粒子'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark F'] === 2 && itemCounts['Quark C'] === 1 && itemCounts['Quark A'] === 0) {
        resultImage.src = 'ImageJ.jpg';
        updateResultSummaryCounter('チャームバリオン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark F'] === 1 && itemCounts['Quark C'] === 2 && itemCounts['Quark A'] === 0) {
        resultImage.src = 'ImageI.jpg';
        updateResultSummaryCounter('チャームバリオン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark F'] === 1 && itemCounts['Quark C'] === 1 && itemCounts['Quark E'] === 1) {
        resultImage.src = 'ImageK.jpg';
        updateResultSummaryCounter('チャームバリオン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark F'] === 1 && itemCounts['Quark C'] === 1 && itemCounts['Quark D'] === 1) {
        resultImage.src = 'ImageL.jpg';
        updateResultSummaryCounter('チャームバリオン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark E'] === 2 && itemCounts['Quark C'] === 1 && itemCounts['Quark D'] === 0) {
        resultImage.src = 'ImageM.jpg';
        updateResultSummaryCounter('チャームバリオン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark E'] === 1 && itemCounts['Quark C'] === 2 && itemCounts['Quark D'] === 0) {
        resultImage.src = 'ImageN.jpg';
        updateResultSummaryCounter('チャームバリオン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark E'] === 1 && itemCounts['Quark C'] === 1 && itemCounts['Quark D'] === 1) {
        resultImage.src = 'ImageO.jpg';
        updateResultSummaryCounter('チャームバリオン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark E'] === 0 && itemCounts['Quark C'] === 1 && itemCounts['Quark D'] === 2) {
        resultImage.src = 'ImageP.jpg';
        updateResultSummaryCounter('チャームバリオン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark F'] === 2 && itemCounts['Quark A'] === 1 && itemCounts['Quark D'] === 0) {
        resultImage.src = 'ImageQ.jpg';
        updateResultSummaryCounter('ボトムバリオン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark E'] === 2 && itemCounts['Quark A'] === 1 && itemCounts['Quark D'] === 0) {
        resultImage.src = 'ImageR.jpg';
        updateResultSummaryCounter('ボトムバリオン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark D'] === 2 && itemCounts['Quark A'] === 1 && itemCounts['Quark E'] === 0) {
        resultImage.src = 'ImageS.jpg';
        updateResultSummaryCounter('ボトムバリオン'); // ガチャ結果のカウンターを更新
    } else if (itemCounts['Quark B'] === 1 ) {
        resultImage.src = 'ImageT.jpg';
    } else if (itemCounts['Quark B'] === 2 ) {
        resultImage.src = 'ImageT.jpg';
    } else if (itemCounts['Quark B'] === 3 ) {
        resultImage.src = 'ImageT.jpg';
    } else {
        resultImage.src = 'Unknown.jpg';
        updateResultSummaryCounter('未発見粒子'); // ガチャ結果のカウンターを更新
    }
    resultSummary.style.display = 'block'; // 結果を表示
    // ガチャ結果のカウンターを更新する関数
    function updateResultSummaryCounter(imageSrc) {
        if (!resultSummaryCounter[imageSrc]) {
            resultSummaryCounter[imageSrc] = 1;
        } else {
            resultSummaryCounter[imageSrc] += 1;
        }
        displayResultSummaryCounter(); // カウンターを表示
    }

// ガチャ結果のカウンターを表示する関数
function displayResultSummaryCounter() {
    const summaryCounter = document.getElementById('summary-counter');
    summaryCounter.innerHTML = ''; // カウンターをクリア
    for (const [imageSrc, count] of Object.entries(resultSummaryCounter)) {
        const counterItem = document.createElement('div');
        counterItem.textContent = `${imageSrc}: ${count}`;
        
        // 背景色のクラスを追加（例: imageA-bg, imageB-bg, imageC-bg, imageD-bg）
        if (imageSrc === '陽子') {
            counterItem.classList.add('particle1-bg');
        } else if (imageSrc === '中性子') {
            counterItem.classList.add('particle2-bg');
        } else if (imageSrc === 'ハイペロン') {
            counterItem.classList.add('particle3-bg');
        } else if (imageSrc === 'デルタ粒子') {
            counterItem.classList.add('particle4-bg');
        } else if (imageSrc === 'カスケードB粒子') {
            counterItem.classList.add('particle5-bg');
        } else if (imageSrc === 'チャームバリオン') {
            counterItem.classList.add('particle6-bg');
        } else if (imageSrc === 'ボトムバリオン') {
            counterItem.classList.add('particle7-bg');
        } else if (imageSrc === '未発見粒子') {
            counterItem.classList.add('particle8-bg');
        }
        
        summaryCounter.appendChild(counterItem);
    }
}

});




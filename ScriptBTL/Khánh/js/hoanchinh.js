const sampleData = [
    {
        id: 1,
        link: "../html/chitiet.html",
        type: "Phòng trọ, nhà trọ",
        location: "Quận Đống Đa, Hà Nội",
        price: 800000,
        area: 30,
        image: "../img/nhà0-1.jpg",
    },
    {
        id: 2,
        link: "../html/chitiet1.html",
        type: "Nhà thuê nguyên căn",
        location: "Thanh Xuân, Hà Nội",
        price: 1200000,
        area: 32,
        image: "../img/nhà1-1.jpg",
    },
    {
        id: 3,
        link: "../html/chitiet2.html",
        type: "Cho thuê căn hộ",
        location: "Cầu Giấy, Hà Nội",
        price: 2500000,
        area: 20,
        image: "../img/nhà2-1.jpg",
    },
    {
        id: 4,
        link: "../html/chitiet3.html",
        type: "Cho thuê căn hộ mini",
        location: "Hoàng Mai, Hà Nội",
        price: 3500000,
        area: 30,
        image: "../img/nhà3-1.jpg",
    },
    {
        id: 5,
        link: "../html/chitiet4.html",
        type: "Cho thuê căn hộ dịch vụ",
        location: "Cầu Giấy, Hà Nội",
        price: 5500000,
        area: 55,
        image: "../img/nhà4-1.jpg",
    },
    {
        id: 6,
        link: "../html/chitiet5.html",
        type: "Tìm người ở ghép",
        location: "Hai Bà Trưng, Hà Nội",
        price: 1500000,
        area: 40,
        image: "../img/nhà5-1.jpg",
    },
    {
        id: 7,
        link: "../html/chitiet6.html",
        type: "Cho thuê mặt bằng",
        location: "Đông Anh, Hà Nội",
        price: 8500000,
        area: 32,
        image: "../img/nhà6-1.jpg",
    },
    {
        id: 8,
        link: "../html/chitiet7.html",
        type: "Phòng trọ, nhà trọ",
        location: "Hà Đông, Hà Nội",
        price: 900000,
        area: 30,
        image: "../img/nhà7-1.jpg",
    },
    {
        id: 9,
        link: "../html/chitiet8.html",
        type: "Phòng trọ, nhà trọ",
        location: "Hoàng Mai, Hà Nội",
        price: 900000,
        area: 30,
        image: "../img/nhà8-1.jpg",
    },
];
function filterResults() {
    const type = document.getElementById("typeFilter").value;
    const location = document.getElementById("locationFilter").value;
    const price = document.getElementById("priceFilter").value;
    const area = document.getElementById("areaFilter").value;

    const filteredData = sampleData.filter(item => {
        const priceInRange = isPriceInRange(item.price, price);
        const areaInRange = isAreaInRange(item.area, area);

        return (
            (type === "" || item.type === type) &&
            (location === "" || item.location === location) &&
            priceInRange &&
            areaInRange
        );
    });

    displayResults(filteredData);
}

// Function to check if price is in selected range
function isPriceInRange(itemPrice, selectedPriceRange) {
    if (selectedPriceRange === "") return true;

    const [min, max] = getPriceRange(selectedPriceRange);
    return itemPrice >= min && itemPrice <= max;
}

// Function to get price range as [min, max]
function getPriceRange(priceRange) {
    switch (priceRange) {
        case "Dưới 1 triệu đồng":
            return [0, 1000000];
        case "Từ 1 - 2 triệu đồng":
            return [1000000, 2000000];
        case "Từ 2 - 3 triệu đồng":
            return [2000000, 3000000];
        case "Từ 3 - 5 triệu đồng":
            return [3000000, 5000000];
        case "Từ 5 - 7 triệu đồng":
            return [5000000, 7000000];
        case "Từ 7 - 10 triệu đồng":
            return [7000000, 10000000];
        case "Từ 10 - 15 triệu đồng":
            return [10000000, 15000000];
        case "Trên 15 triệu đồng":
            return [15000000, Infinity];
        default:
            return [0, Infinity];
    }
}

// Function to check if area is in selected range
function isAreaInRange(itemArea, selectedAreaRange) {
    if (selectedAreaRange === "") return true;

    const [min, max] = getAreaRange(selectedAreaRange);
    return itemArea >= min && itemArea <= max;
}

// Function to get area range as [min, max]
function getAreaRange(areaRange) {
    switch (areaRange) {
        case "Dưới 20m2":
            return [0, 20];
        case "Từ 20m2 - 30m2":
            return [20, 30];
        case "Từ 30m2 - 50m2":
            return [30, 50];
        case "Từ 50m2 - 70m2":
            return [50, 70];
        case "Từ 70m2 - 90m2":
            return [70, 90];
        case "Trên 90m2":
            return [90, Infinity];
        default:
            return [0, Infinity];
    }
}
const resultsDiv = document.getElementById("results");
const searchButton = document.getElementById("searchButton");
const resetButton = document.getElementById("resetButton");

// Event listeners for buttons
searchButton.addEventListener("click", filterResults);
resetButton.addEventListener("click", resetFilters);

// Event listeners for sidebar filters
document.querySelectorAll('.sidebar a[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.target.getAttribute('data-filter');
        
        if (filter.includes("m2")) {
            document.getElementById('areaFilter').value = filter;
        } else {
            document.getElementById('priceFilter').value = filter;
        }
        filterResults();
    });
});

// Function to filter results based on selected criteria
function filterResults() {
    const type = document.getElementById("typeFilter").value;
    const location = document.getElementById("locationFilter").value;
    const price = document.getElementById("priceFilter").value;
    const area = document.getElementById("areaFilter").value;

    const filteredData = sampleData.filter(item => {
        const priceInRange = isPriceInRange(item.price, price);
        const areaInRange = isAreaInRange(item.area, area);

        return (
            (type === "" || item.type === type) &&
            (location === "" || item.location === location) &&
            priceInRange &&
            areaInRange
        );
    });

    displayResults(filteredData);
}

// Function to check if price is in selected range
function isPriceInRange(itemPrice, selectedPriceRange) {
    if (selectedPriceRange === "") return true;

    const [min, max] = getPriceRange(selectedPriceRange);
    return itemPrice >= min && itemPrice <= max;
}

// Function to get price range as [min, max]
function getPriceRange(priceRange) {
    switch (priceRange) {
        case "Dưới 1 triệu đồng":
            return [0, 1000000];
        case "Từ 1 - 2 triệu đồng":
            return [1000000, 2000000];
        case "Từ 2 - 3 triệu đồng":
            return [2000000, 3000000];
        case "Từ 3 - 5 triệu đồng":
            return [3000000, 5000000];
        case "Từ 5 - 7 triệu đồng":
            return [5000000, 7000000];
        case "Từ 7 - 10 triệu đồng":
            return [7000000, 10000000];
        case "Từ 10 - 15 triệu đồng":
            return [10000000, 15000000];
        case "Trên 15 triệu đồng":
            return [15000000, Infinity];
        default:
            return [0, Infinity];
    }
}

// Function to check if area is in selected range
function isAreaInRange(itemArea, selectedAreaRange) {
    if (selectedAreaRange === "") return true;

    const [min, max] = getAreaRange(selectedAreaRange);
    return itemArea >= min && itemArea <= max;
}

// Function to get area range as [min, max]
function getAreaRange(areaRange) {
    switch (areaRange) {
        case "Dưới 20m2":
            return [0, 20];
        case "Từ 20m2 - 30m2":
            return [20, 30];
        case "Từ 30m2 - 50m2":
            return [30, 50];
        case "Từ 50m2 - 70m2":
            return [50, 70];
        case "Từ 70m2 - 90m2":
            return [70, 90];
        case "Trên 90m2":
            return [90, Infinity];
        default:
            return [0, Infinity];
    }
}

// Function to reset filters
function resetFilters() {
    document.getElementById("typeFilter").value = "";
    document.getElementById("locationFilter").value = "";
    document.getElementById("priceFilter").value = "";
    document.getElementById("areaFilter").value = "";
    displayResults(sampleData);
}

// Function to display results
function displayResults(data) {
    resultsDiv.innerHTML = "";
    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${item.image}" alt="${item.type}" href="${item.url}">
            <div class="card-content">
                <h3>${item.type}</h3>
                <p>Địa điểm: ${item.location}</p>
                <p>Giá: ${item.price}</p>
                <p>Diện tích: ${item.area} m2</p>
            </div>
        `;
        resultsDiv.appendChild(card);
    });
}




function displayResults(data) {
    resultsDiv.innerHTML = "";
    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        const imageLink = document.createElement("a");
        imageLink.href = item.link || "link";  
        imageLink.target = "_blank";
        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.type;
        imageLink.appendChild(image);
        card.appendChild(imageLink);
        const cardContent = document.createElement("div");
        cardContent.className = "card-content";
        cardContent.innerHTML = `
            <h3>${item.type}</h3>
            <p>Địa điểm: ${item.location}</p>
            <p>Giá: ${item.price}</p>
            <p>Diện tích: ${item.area} m2</p>
        `;
        card.appendChild(cardContent);
        resultsDiv.appendChild(card);
    });
}
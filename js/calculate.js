const cleaningTypes = ["Регулярная уборка", "Генеральная уборка", "Уборка после ремонта"];
let currentTypeIndex = 0;
const cleaningTypeElement = document.getElementById("cleaning-type");

function updateCleaningType() {
    cleaningTypeElement.textContent = cleaningTypes[currentTypeIndex];
}

document.querySelector(".minus-btn").addEventListener("click", function() {
    const input = document.getElementById("oven-cleaning-input");
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
    }
});

document.querySelector(".plus-btn").addEventListener("click", function() {
    const input = document.getElementById("oven-cleaning-input");
});

document.getElementById("prev-btn").addEventListener("click", function () {
    currentTypeIndex = (currentTypeIndex - 1 + cleaningTypes.length) % cleaningTypes.length;
    updateCleaningType();
});

document.getElementById("next-btn").addEventListener("click", function () {
    currentTypeIndex = (currentTypeIndex + 1) % cleaningTypes.length;
    updateCleaningType();
});

function incrementValue(inputId) {
    const input = document.getElementById(inputId);
    input.value = parseInt(input.value) + 1;
}

function decrementValue(inputId) {
    const input = document.getElementById(inputId);
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

updateCleaningType();


document.getElementById("calculate-btn").addEventListener("click", function () {
    event.preventDefault();
    const cleaningPrices = {
        "Регулярная уборка": 2000,
        "Генеральная уборка": 3000,
        "Уборка после ремонта": 4000
    };

    const roomCoefficients = {
        "room-1": 1,
        "room-2": 1.2,
        "room-3": 1.4,
        "room-4": 1.6,
        "room-5": 2
    };

    const additionalServicesPrices = {
        "oven-cleaning-input": 500,
        "microwave-cleaning-input": 300,
        "fridge-cleaning-input": 400
    };
    // Создаем строку с информацией об услугах и их количестве
    const selectedCleaningType = cleaningTypes[currentTypeIndex];
const selectedRoomRadios = document.querySelectorAll("input[name='radio']");
const selectedAdditionalServices = document.querySelectorAll("input[type='number']");

let cleaningTypePrice = cleaningPrices[selectedCleaningType];
let roomCoefficient = 1;
let additionalServicesPrice = 0;

selectedRoomRadios.forEach(radio => {
    if (radio.checked) {
        roomCoefficient = roomCoefficients[radio.id];
    }
});

selectedAdditionalServices.forEach(service => {
    additionalServicesPrice += parseInt(service.value) * additionalServicesPrices[service.id];
});

const totalCost = cleaningTypePrice * roomCoefficient + additionalServicesPrice;

// Создаем объект для хранения информации о выбранных дополнительных услугах и их количестве
let selectedAdditionalServicesInfo = {};

selectedAdditionalServices.forEach(service => {
    const serviceId = service.id;
    const serviceQuantity = parseInt(service.value);
    
    if (serviceQuantity > 0) {
        selectedAdditionalServicesInfo[serviceId] = serviceQuantity;
    }
});

// Генерируем строку с информацией о выбранных дополнительных услугах
let additionalServicesInfo = 'Выбранные дополнительные услуги:\n';
for (const serviceId in selectedAdditionalServicesInfo) {
    const serviceName = serviceId.replace('-input', '');
    const serviceQuantity = selectedAdditionalServicesInfo[serviceId];
    additionalServicesInfo += `${serviceName}: ${serviceQuantity}\n`;
}

// Создаем строку с информацией об услугах и их количестве
const servicesInfo = `Выбранный вид уборки: ${cleaningTypes[currentTypeIndex]}, Количество услуг: ${document.getElementById("oven-cleaning-input").value}\n${additionalServicesInfo}`;

// Обновляем значение поля formCost с учетом информации об услугах и итоговой стоимости
document.getElementById("formCost").value = `${servicesInfo}, Итоговая стоимость: ${totalCost} руб.`;

document.getElementById("total-cost").textContent = `Стоимость уборки: ${totalCost} руб.`;
let totCost = document.getElementById("total-cost");
totCost.style.padding = 30 + 'px ' + 0 + 'px';
totCost.style.textAlign = 'center';
});
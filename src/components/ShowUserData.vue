<template>
    <div class="user-data container">
        <h1>
            User Data
        </h1>
        <div class="info p-2">
            <div class="info-item">
                <div id="email">
                    <h3>Email</h3>
                    <p>{{email}}</p>
                </div>
            </div>
            <div class="info-item">
                <div id="type">
                    <h3>Type</h3>
                    <p>{{type}}</p>
                </div>
            </div>
            <div class="info-item-contractor">
                <div class="info-item">
                    <div id="companyName">
                        <h3>Company Name</h3>
                        <p>{{companyName}}</p>
                    </div>
                </div>
                <div class="info-item">
                    <div id="location">
                        <h3>Location</h3>
                        <p>{{location}}</p>
                    </div>
                </div>
                <div class="info-item">
                    <div id="yearsOfExperience">
                        <h3>Years of Experience</h3>
                        <p>{{yearsOfExperience}}</p>
                    </div>
                </div>
                <div class="info-item">
                    <div id="rank">
                        <h3>Rank</h3>
                        <p>{{rank}}</p>
                    </div>
                </div>
                <div class="info-item">
                    <div id="egFedId">
                        <h3>EG Fed ID</h3>
                        <!-- button to download pdf -->
                        <button>
                            <a :href="egFedIdURL" download>Download</a>
                        </button>
                    </div>
                </div>
                <div class="info-item">
                    <div id="taxesCard">
                        <h3>Taxes Card</h3>
                        <!-- button to download pdf -->
                        <button>
                            <a :href="taxesCardURL" download>Download</a>
                        </button>
                    </div>
                </div>
                <div class="info-item">
                    <div id="specializedType">
                        <h3>Specialized Type</h3>
                        <p>{{specializedType}}</p>
                    </div>
                </div>
                <div class="info-item">
                    <div id="certifications">
                        <h3>Certifications</h3>
                        <!-- button to download pdf -->
                        <button>
                            <a :href="certifactionURL" download>Download</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import * as idb from 'idb';
    // get data from indexedDB
    const form = ref(null);
    // get form data from indexedDB
    const email = ref(null);
    const type = ref(null);
    const companyName = ref(null);
    const location = ref(null);
    const yearsOfExperience = ref(null);
    const rank = ref(null);
    const egFedIdURL = ref(null);
    const taxesCardURL = ref(null);
    const specializedType = ref(null);
    const certifactionURL = ref(null);

    onMounted(async () => {
        // get data from indexedDB
        const data = await getData();
        // get form data from indexedDB
        const formData = await getFormData();
        
    });

    async function getData() {
        const db = await idb.openDB('dataDB', 1);
        const data = await db.getAll('dataStore');
        const transaction = db.transaction('dataStore', 'readwrite');
        const objectStore = transaction.objectStore('dataStore');
        const reader = new FileReader();
        reader.onload = function () {
            console.log(reader.result);
        }
        // loop through blobs and set type of 'application/pdf' to pdf
        data.forEach(element => {
            if (element.type == 'application/pdf') {
                // blob to pdf
                const reader = new FileReader();
                reader.onload = function () {

                }
                reader.readAsDataURL(element);
            }
            // Open a cursor to iterate through the data in the object store
        });
        // eg fed id url
        egFedId.value = await objectStore.get('eg-fed-id');
        egFedIdURL.value = URL.createObjectURL(egFedId.value);

        // taxes card url
        taxesCard.value = await objectStore.get('taxes-card');
        taxesCardURL.value = URL.createObjectURL(taxesCard.value);

        // csertifications url
        certifications.value = await objectStore.get('certifications');
        certifactionURL.value = URL.createObjectURL(certifications.value);
        return data;
    }

    async function getFormData() {
        const db = await idb.openDB('dataDB', 1);
        const data = await db.getAll('dataStore');
        // loop through data ans set type of 'application/json' to form
        data.forEach(element => {
            if (element.type == 'application/json') {
                // blob to json
                const reader = new FileReader();
                reader.onload = function () {
                    const json = JSON.parse(reader.result);
                    // set form data
                    form.value = json;  
                    // set form data
                    email.value = json.email;
                    type.value = json.type;
                    companyName.value = json.companyName;
                    location.value = json.location;
                    yearsOfExperience.value = json.yearsOfExperience;
                    rank.value = json.rank;
                    egFedId.value = json.egFedId;
                    taxesCard.value = json.taxesCard;
                    specializedType.value = json.specializedType;
                    certifications.value = json.certifications;
                }
                reader.readAsText(element);
            }
        });
        return form;
    }
</script>
<style>
    .user-data {
        margin-top: 100px;
        min-height: 100vh;
    }
    .user-data .info {
        width: 100%;
    }
    .user-data .info .info-item div{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 10px;
        padding:10px ;
        border: 1px solid black;
    }

    button{
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
    button a {
        color: white;
        text-decoration: none;
    }
    button a:hover {
        color: white;
        text-decoration: none;
    }
</style>
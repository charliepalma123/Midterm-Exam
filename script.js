let records = [];
let recordId = 1;

function createRecord() {
    const subject = document.getElementById("subject").value;
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;
    const room = document.getElementById("room").value;
    const instructor = document.getElementById("instructor").value;

    const newRecord = { id: recordId++, subject, day, time, room, instructor};
    records.push(newRecord);

    displayRecords();
    clearForm("create-form");
}

function displayRecords() {
    const recordList = document.getElementById("record-list");
    recordList.innerHTML = "";

    for (const record of records) {
        const li = document.createElement("li");
        li.innerHTML = `ID: ${record.id}, Subject: ${record.subject}, Day: ${record.day}, Time: ${record.time}, Room: ${record.room}, Instructor: ${record.instructor}`;
        recordList.appendChild(li);
    }
}

function clearForm(formId) {
    const form = document.getElementById(formId);
    form.reset();
}

function updateRecord() {
    const id = document.getElementById("update-id").value;
    const subject = document.getElementById("update-subject").value;
    const day = document.getElementById("update-day").value;
    const time = document.getElementById("update-time").value;
    const room = document.getElementById("update-room").value;
    const instructor = document.getElementById("update-instructor").value;


    const recordToUpdate = records.find(record => record.id == id);

    if (recordToUpdate) {
        recordToUpdate.subject = subject;
        recordToUpdate.day = day;
        recordToUpdate.time = time;
        recordToUpdate.room = room;
        recordToUpdate.instructor = instructor;
        displayRecords();
        clearForm("update-form");
    } else {
        alert("Record not found");
    }
}

function deleteRecord() {
    const id = document.getElementById("delete-id").value;
    const index = records.findIndex(record => record.id == id);

    if (index !== -1) {
        records.splice(index, 1);
        displayRecords();
        clearForm("delete-form");
    } else {
        alert("Record not found");
    }
}

displayRecords();

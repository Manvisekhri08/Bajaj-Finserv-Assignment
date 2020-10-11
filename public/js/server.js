const PatientForm = document.querySelector('form')
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")
const messageThree = document.querySelector("#message-3")
const messageFour = document.querySelector("#message-4")
const messageFive = document.querySelector("#message-5")
const messageSix = document.querySelector("#message-6")
const messageSeven = document.querySelector("#message-7")
const messageEight = document.querySelector("#message-8")
const messageNine = document.querySelector("#message-9")
const messageTen = document.querySelector("#message-10")
const messageEleven = document.querySelector("#message-11")
const messageTwelve = document.querySelector("#message-12")
const messageThirteen = document.querySelector("#message-13")
const messageFourteen = document.querySelector("#message-14")
const messageFifteen = document.querySelector("#message-15")
const messageSixteen = document.querySelector("#message-16")


PatientForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const Mobno = search.value

    messageOne.textContent = "Data doesnot exist! Please check your Mobile Number Again"
    messageTwo.textContent = ""


    fetch("http://localhost:3000/data?Mobno="+ Mobno).then((response) => {
      response.json().then((data) => {
        if (data.message) {
             messageOne.textContent = data.message
             //console.log('Data doesnot exist! Please check your Mobile Number Again')
        } else {
            messageOne.textContent = "Mobile No:- "+ data[0].Mobno
            messageTwo.textContent = "Card Number:- "+data[0].CardDetails.CardNumber
            messageThree.textContent = "Patient ID:- " + data[0].PatientDetails[0].PatientId
            messageFour.textContent = "FirstName:- " + data[0].PatientDetails[0].FirstName
            messageFive.textContent = "MiddleName:- " + data[0].PatientDetails[0].MiddleName
            messageSix.textContent = "LastName:- " + data[0].PatientDetails[0].LastName
            messageSeven.textContent = "Gender:- " + data[0].PatientDetails[0].Gender
            messageEight.textContent = "Date of Birth:- " + data[0].PatientDetails[0].DOB
            messageNine.textContent = "Address Type:- " + data[0].PatientDetails[0].AddressDetails[0].AddressType
            messageTen.textContent = "Residential:- " + data[0].PatientDetails[0].AddressDetails[0].Address
            messageEleven.textContent = "VTC:- " + data[0].PatientDetails[0].AddressDetails[0].VTC
            messageTwelve.textContent = "Taluka:- " + data[0].PatientDetails[0].AddressDetails[0].Taluka
            messageThirteen.textContent = "District:- " + data[0].PatientDetails[0].AddressDetails[0].District
            messageFourteen.textContent = "State:- " + data[0].PatientDetails[0].AddressDetails[0].State
            messageFifteen.textContent = "PinCode:- " + data[0].PatientDetails[0].AddressDetails[0].PinCode
            messageSixteen.textContent = "Country:- "+data[0].PatientDetails[0].AddressDetails[0].Country
        }
      });
    });
    
})
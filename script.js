function checkAge(){
  let ageInput = document.getElementById('ageInput').value;
  let resultDiv = document.getElementById('ageResult');
  if(isNaN(ageInput)){
    resultDiv.innerHTML = `<div class="alert alert-warning">Please enter a valid age.</div>`;
    return;
  }
  let cardContent= '';
  if (ageInput>=18){
    resultDiv.innerHTML = `
      <div class="card border-success">
        <div class="card-body text-success">
          <h5 class="card-title">You are an adult</h5>
          <p class="card-text">You are 18 or older.</p>
        </div>
      </div>`;
  }
  else{
    resultDiv.innerHTML = `
      <div class="card border-danger">
        <div class="card-body text-danger">
          <h5 class="card-title">You are an child</h5>
          <p class="card-text">You are under 18 years old.</p>
        </div>
      </div>`;
  }
}
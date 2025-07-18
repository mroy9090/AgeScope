document.addEventListener('DOMContentLoaded' , ()=>{
  let ageInput= document.getElementById('ageInput');
  let resultDiv = document.getElementById('ageResult');
  let cardBody = document.getElementById('cardBody');

  ageInput.addEventListener('input', ()=>{
    let age = ageInput.value;

    if(age === '' || isNaN(age)){
      resultDiv.innerHTML = '<div class="alert alert-warning">Please enter a valid age.</div>';

    }
    else if(age<18){
      cardBody.innerHTML = `
      <div class="col-md-4">
          <div class="card h-100">
              <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">Child</h5>
                  <p class="card-text">If your age is between 0 to 18 .</p>
              </div>
          </div>
      </div>`
    }
    else if(age>18){
      cardBody.innerHTML = `
      <div class="col-md-4">
          <div class="card h-100">
              <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">Adult</h5>
                  <p class="card-text">If your age is between 0 to 18 .</p>
              </div>
          </div>
      </div>`
    }
    else {
      cardBody.innerHTML = `
      <div class="col-md-4">
          <div class="card h-100">
              <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">Adult</h5>
                  <p class="card-text">If your age is between 0 to 18 .</p>
              </div>
          </div>
      </div>
      <div class="col-md-4">
          <div class="card h-100">
              <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">Adult</h5>
                  <p class="card-text">If your age is between 0 to 18 .</p>
              </div>
          </div>
      </div>`
    }
  })
})

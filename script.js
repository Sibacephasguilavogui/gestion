// Écouteur d'événement pour soumettre le formulaire
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
  
    // Récupération des valeurs des champs
    var appointmentId = document.getElementById('appointment-id').value;
    var userId = document.getElementById('user-id').value;
    var startTime = document.getElementById('start-time').value;
    var endTime = document.getElementById('end-time').value;
    var status = document.getElementById('status').value;
    var notes = document.getElementById('notes').value;
    var email = document.getElementById('email').value;
    var photo = document.getElementById('photo').files[0];
  
    // Création de la ligne du tableau avec les données du rendez-vous
    var row = document.createElement('tr');
    row.innerHTML = `
      <td>${appointmentId}</td>
      <td>${userId}</td>
      <td>${startTime}</td>
      <td>${endTime}</td>
      <td>${status}</td>
      <td>${notes}</td>
      <td>${email}</td>
      <td>${photo ? photo.name : ''}</td>
      <td>
        <button onclick="editAppointment(this)">Modifier</button>
        <button onclick="deleteAppointment(this)">Supprimer</button>
      </td>
    `;
  
    // Ajout de la ligne au tableau des rendez-vous
    var tableBody = document.getElementById('appointment-table-body');
    tableBody.appendChild(row);
  
    // Réinitialisation du formulaire
    document.getElementById('appointment-form').reset();
    document.getElementById('photo-preview').src = '#';
  });
  
  // Fonction pour modifier un rendez-vous
  function editAppointment(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');
  
    // Remplir le formulaire avec les données du rendez-vous sélectionné
    document.getElementById('appointment-id').value = cells[0].innerText;
    document.getElementById('user-id').value = cells[1].innerText;
    document.getElementById('start-time').value = cells[2].innerText;
    document.getElementById('end-time').value = cells[3].innerText;
    document.getElementById('status').value = cells[4].innerText;
    document.getElementById('notes').value = cells[5].innerText;
    document.getElementById('email').value = cells[6].innerText;
  }
  
  // Fonction pour supprimer un rendez-vous
  function deleteAppointment(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }

  totalAppointments.textContent = `Total des Rendez-vous: ${appointment-table-body.children.length}`;

  
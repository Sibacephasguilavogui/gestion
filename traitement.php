<!-- traitement.php -->
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupération des données du formulaire
    $idRdv = $_POST['id-rdv'];
    $idUtilisateur = $_POST['id-utilisateur'];
    $dateHeureDebut = $_POST['date-heure-debut'];
    $dateHeureFin = $_POST['date-heure-fin'];
    $statut = $_POST['statut'];
    $note = $_POST['note'];

    // Validation des données si nécessaire
    // ...

    // Traitement en fonction du statut du rendez-vous
    if ($statut === 'confirmer') {
        // Traitement de la confirmation du rendez-vous
        echo "<h2>Rendez-vous confirmé</h2>";
        echo "<p>ID Rendez-vous: $idRdv</p>";
        echo "<p>ID Utilisateur: $idUtilisateur</p>";
        echo "<p>Date et Heure de début: $dateHeureDebut</p>";
        echo "<p>Date et Heure de fin: $dateHeureFin</p>";
        echo "<p>Statut: $statut</p>";
        echo "<p>Note: $note</p>";
    } elseif ($statut === 'annule') {
        // Traitement de l'annulation du rendez-vous
        echo "<h2>Rendez-vous annulé</h2>";
        echo "<p>ID Rendez-vous: $idRdv</p>";
        echo "<p>ID Utilisateur: $idUtilisateur</p>";
        echo "<p>Date et Heure de début: $dateHeureDebut</p>";
        echo "<p>Date et Heure de fin: $dateHeureFin</p>";
        echo "<p>Statut: $statut</p>";
        echo "<p>Note: $note</p>";
    } else {
        // Traitement de la modification du rendez-vous
        echo "<h2>Rendez-vous modifié</h2>";
        echo "<p>ID Rendez-vous: $idRdv</p>";
        echo "<p>ID Utilisateur: $idUtilisateur</p>";
        echo "<p>Date et Heure de début: $dateHeureDebut</p>";
        echo "<p>Date et Heure de fin: $dateHeureFin</p>";
        echo "<p>Statut: $statut</p>";
        echo "<p>Note: $note</p>";
    }
}
?>

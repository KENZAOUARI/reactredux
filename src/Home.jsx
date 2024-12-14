import React from 'react';
import { Link } from 'react-router-dom';
import { userData } from './Data.jsx';

function Home() {
  return (
    <div className="container">
      <h2>Crud app redux toolkit</h2>
      {/* Corrigé : utilisation de la balise Link pour la navigation */}
      <Link to="/add" className="btn btn-success my-3">
        Ajouter
      </Link>
      <h3>Liste des utilisateurs</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {/* Lien vers la page d'édition */}
                <Link to={`/edit/${user.id}`} className="btn btn-primary btn-sm">
                  Modifier
                </Link>
                {/* Bouton supprimer */}
                <button className="btn btn-danger btn-sm ms-2">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;

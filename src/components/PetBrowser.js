import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  // petInfo = () => {
  //   this.props.pets.map(pet => {
  //     return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPets} />
  //   })
  // }
  
  render() {
    console.log(this)
    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    ));
    return <div className="ui cards">{petCards}</div>

  }
}

export default PetBrowser

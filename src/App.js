import Card from './Card'

function App(props) {
  return (
    <div className="container">
      <h1>Bootstrap Cards</h1>
      <Card title={'Card One'}/>
      <Card title={'Card Two'}/>
      <Card title={'Card Three'}/>
    </div>
  );
}

export default App;

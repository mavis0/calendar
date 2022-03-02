import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/cell/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const date = new Date()
  const [month, setMonth] = useState(date.getMonth() + 1)
  const week = ['一', '二', '三', '四', '五', '六', '日']
  return (
    <IonPage>
      <IonHeader>
        <div>
          <div className="header">
            <span>{date.getFullYear()}年</span>
            <div className="weekbar">
              {
                week.map((x, i) => <IonCol key={i}><div>{x}</div></IonCol>)
              }
            </div>
          </div>
        </div>
      </IonHeader>
      <IonContent fullscreen scrollY={false}>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;

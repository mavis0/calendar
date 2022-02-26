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
        <IonToolbar>
          <IonTitle className="header">
            <span>{month}月</span>
            <IonRow className="weekbar">
              {
                week.map(x => <IonCol><div>{x}</div></IonCol>)
              }
            </IonRow>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={false}>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;

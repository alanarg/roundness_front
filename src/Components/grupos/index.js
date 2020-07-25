import React, { Component, useState } from 'react';
import './styles.css';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/Restaurant';
import Food from '@material-ui/icons/RestaurantMenuSharp';
import Add from '@material-ui/icons/Add';
import Create from '@material-ui/icons/Create';
import Menu from '@material-ui/icons/MenuBook';
import Timeline from '@material-ui/icons/Timeline';
import Esport from '@material-ui/icons/FitnessCenter';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//use selector do redux para pegar inormções 
// import {useSelector} from 'react-redux';
import Container from '@material-ui/core/Container';
import caixa from "./img/caixa.png";
import mesas from "./img/mesas.png";
import associados from "./img/associados.png";
import clientes from "./img/clientes.png";
import delivery from "./img/delivery.png";
import estoque from "./img/estoque.png";
import bebidas from "./img/bebidas.jpg";
import ovos from "./img/ovos.jpg";
import doces from "./img/doces.jpg";
import indus from "./img/indus.jpg";
import prontos from "./img/prontos.jpg";
import leguminosas from "./img/leguminosas.jpg";
import nozes from "./img/nozes.jpg";
import foto from "./img/addphoto.jpg";
import { Link } from 'react-router-dom';
// import CustomizedDialogs from '../refeicao/index';
import { yellow } from '@material-ui/core/colors';
import Header from '../Header';


const cards = [{ id: 1, nome: "Caixa", imagem: caixa },
{ id: 2, nome: "Mesas e Comandas", imagem: mesas },
{ id: 3, nome: "Associados", imagem: associados},
{ id: 4, nome: "Clientes", imagem: clientes },
{ id: 5, nome: "Delivery", imagem: delivery },
{ id: 6, nome: "Carnes e derivados", imagem:""},
{ id: 7, nome: "Leite e Derivados", imagem:"" },
{ id: 8, nome: "Bebidas (alcoólicas e não alcoólicas)", imagem: "" },
{ id: 9, nome: "Ovos e derivados", imagem:"" },
{ id: 10, nome: "Produtos açucarados", imagem: "" },
{ id: 11, nome: "Miscelâneas", imagem: "" },
{ id: 12, nome: "Outros alimentos industrializados", imagem: "" },
{ id: 13, nome: "Alimentos preparados", imagem: ""},
{ id: 14, nome: "Leguminosas e Derivados", imagem: ""},
{ id: 15, nome: "Nozes e sementes", imagem:"" }
];


const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(45deg, #76FF03 30%,  #FFFF00 90%)',

  },
  icon: {
    marginRight: theme.spacing(5),


  },

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),

  },
  cardGrid: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  },
  card: {


    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  card2: {
    height: '100%',
    display: 'flex',
    align: 'center',

    flexDirection: 'column',

  },
  cardMedia: {
    paddingTop: '90.25%', // 16:9
    width: '30%',
    paddingLeft:'50%',
    
  },
  cardContent: {
    flexGrow: 1,
  },
  cont:{
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },


}));

const SampleFab = (props) => {
  const [comidas, setComidas] = useState([0]);
  // const comidas = useSelector(state=> state.comidas);
  
 
  console.log(props.prop);
  const classes = useStyles();
  const cards2 = 
    { nome: "Ingerir", image: foto };



  
 


  return <React.Fragment>

    <Header />
    <main>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="xl">
        
          <Container className={classes.cardGrid} maxWidth="xl">
            {/* End hero unit */}
            <Grid container spacing={2}>
            <Grid item key={cards2} sm={4} >
                  <Card className={classes.cards2}>
                    <CardMedia

                      className={classes.cardMedia}
                      image={cards2.image}


                    />

                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">

                      </Typography>
                    </CardContent>
                    <CardActions>
                      {/* <CustomizedDialogs /> */}



                    </CardActions>
                  </Card>

                </Grid>

              {comidas.map(card2 => (
                <Grid item key={card2} sm={4} >
                  <Card className={classes.card2}>
                    <CardMedia

                      className={classes.cardMedia}
                      image={card2.image}


                    />
                
                  <CardContent className={classes.cardContent}>
                    
                      <Typography gutterBottom variant="h5" component="h2">
                        {card2.hora+" ---- "+card2.title}
                      </Typography>
                      <Typography color="textSecondary" guetterBottom>
                        {card2.data+" ---- "+card2.descript}
                      </Typography>
                      </CardContent>

                    <CardActions>
                    
                      
                    </CardActions>
                  </Card>
                </Grid>
              ))}

            </Grid>

          </Container>



          <div className={classes.heroButtons}>
            <Grid container spacing={10} justify="center">
              <Grid item>
                <Button variant="contained" color="secudary">
                  <Link to='/graph'>
                  Meu desempenho <Timeline className={classes.icon} />
                  </Link>
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color={classes.root}>
                  Minha Modalidade <Esport />
                </Button>

              </Grid>

            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>

                <CardMedia

                  
                  className={classes.cardMedia}
                  image={card.imagem}
                  title={card.nome}

                />

                <CardContent className={classes.cardContent}>

                  <Typography gutterBottom variant="h5" component="h2">
                      
                  </Typography>
                  <Typography>
                    {/* //Pode ser uma descrição */}
                  </Typography>
                </CardContent>
                <CardActions>

                  <Button size="small" color="primary" >

                    <Link to={`/alimentos/${card.id}`}>{card.nome}</Link>
                    <Menu className={classes.icon} />

                  </Button>
                  <Button size="small" color="primary">
                    {/* Edit */}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
    {/* Footer */}
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
            </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Desenvolvido por Alan Arguelho. Medalha Nutri intervenção de agenda nutriional!
            </Typography>
      <Copyright />
    </footer>
    {/* End footer */}
  </React.Fragment>















}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
          </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default class Grups extends Component {

  componentDidMount() {



    this.loadProducts();

  }

  loadProducts = async () => {







  };
  render() {

    return (
      <SampleFab />

    );

  }







}
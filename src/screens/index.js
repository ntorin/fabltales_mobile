import { Navigation } from 'react-native-navigation';

import Login from 'pages/Login/Login';
import MainMenu from 'pages/MainMenu/MainMenu';
import Create from 'pages/Create/Create';
import LobbyFinder from 'pages/LobbyFinder/LobbyFinder';
import Lobby from 'pages/Lobby/Lobby';
import LobbyQueue from 'pages/LobbyQueue/LobbyQueue';
import Library from 'pages/Library/Library';
import PublishedStory from 'pages/PublishedStory/PublishedStory';
import Shop from 'pages/Shop/Shop';
import Friends from 'pages/Friends/Friends';
import Profile from 'pages/Profile/Profile';
import Settings from 'pages/Settings/Settings';
import CurrentStory from 'pages/CurrentStory/CurrentStory';


export default function(){
    Navigation.registerComponent('fabltales_mobile.Login', () => Login);
    Navigation.registerComponent('fabltales_mobile.MainMenu', () => MainMenu);
    Navigation.registerComponent('fabltales_mobile.Create', () => Create);
    Navigation.registerComponent('fabltales_mobile.LobbyFinder', () => LobbyFinder);
    Navigation.registerComponent('fabltales_mobile.Lobby', () => Lobby);
    Navigation.registerComponent('fabltales_mobile.LobbyQueue', () => LobbyQueue);
    Navigation.registerComponent('fabltales_mobile.Library', () => Library);
    Navigation.registerComponent('fabltales_mobile.PublishedStory', () => PublishedStory);
    Navigation.registerComponent('fabltales_mobile.Shop', () => Shop);
    Navigation.registerComponent('fabltales_mobile.Friends', () => Friends);
    Navigation.registerComponent('fabltales_mobile.Profile', () => Profile);
    Navigation.registerComponent('fabltales_mobile.Settings', () => Settings);
    Navigation.registerComponent('fabltales_mobile.CurrentStory', () => CurrentStory);
}

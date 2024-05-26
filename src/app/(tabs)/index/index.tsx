import { Text, View, Image, TouchableOpacity, } from "react-native";
import { Link } from "expo-router";
import styleHome from "../../styles/styleHome";
import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/aaaa";
import Header from "../../components/Header";

export default function Home() {
    const {usuario, setUsuario} = useContext(GlobalContext)

    return (
        <View>
            <Header/>
            <View>
                <View style={styleHome.divTotal}>
                    <Image source={require('../../../../assets/user.png')} style={styleHome.imgInfo}></Image>
                    <Text style={styleHome.divInfo1}>{usuario.nome}, {usuario.idade}</Text>
                    <Text style={styleHome.divInfo2}>{usuario.altura}m  {usuario.peso}kg</Text>
                </View>
            </View>
            <View style={styleHome.proximosEventos}>
                <Text style={styleHome.divProximo}>Próximos eventos</Text>
                <View>
                    <View style={styleHome.infoProximo}>
                            <Text style={styleHome.infoProximoDetail}>Dipirona 12:00</Text>
                            <Text style={styleHome.infoProximoDetail}>10/05/24</Text>
                    </View>
                    <View style={styleHome.infoProximo}>
                        <Text style={styleHome.infoProximoDetail}>Pediatra 10:30</Text>
                        <Text style={styleHome.infoProximoDetail}>11/07/24</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={styleHome.statusDivHeader}>
                    <View style={styleHome.statusDiv}>
                        <Text style={styleHome.statusHeader}>IMC</Text>
                        <View style={styleHome.statusFooter}>
                            <Text style={styleHome.statusInfo}>31.14</Text>
                            <Text style={styleHome.statusInfo}>Obesidade I</Text>
                        </View>
                    </View>
                    <View style={styleHome.statusDiv}>
                        <Text style={styleHome.statusHeader}>Colesterol</Text>
                        <View style={styleHome.statusFooter}>
                            <Text style={styleHome.statusInfo}>39.5</Text>
                            <Text style={styleHome.statusInfo}>Alto</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

import { View, Text, Button, Image } from "react-native";
import { Link } from "expo-router";
import stylesExame from "../styles/styleExame";
import React from "react";

export default function Perfil() {
    return (
        <View style={{flex:1}}>
            <View style={stylesExame.divUsuario}>
                <View style={stylesExame.containerUsuario}>
                    <Image source={require('../../../assets/user.png')} style={stylesExame.imgUsuario} />
                    <Link href={"../../perfil"} style={stylesExame.nomeUsuario}>Nome do Usuário</Link>
                </View>
            </View>
        </View>
    )
}
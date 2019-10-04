import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, FlatList, View, AsyncStorage, AppState } from 'react-native';
import { Container, Content, StyleProvider } from 'native-base';
import { ValidationComponent, Toast } from '../../../helper';
import { HeaderComponent,  Loader, Text } from '../../common';
import getTheme from '../../../../native-base-theme/components';
import material from '../../../../native-base-theme/variables/platform';

class AssetLists extends ValidationComponent {
    
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            deviceId: '',
            devicesStatus: [],
            helper: {
                loading: false
            },          
        };
    }
   

    /**
    * @method render
    * @description to render component
    */
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
            <Container style={innerStyle.container}>
                <Loader isLoading={this.state.helper.loading} />
                <HeaderComponent
                    title='National Park'
                    leftButton='menu'
                    routeName='Home'
                    info={true}
                    rightAction={() => this.props.navigation.navigate('Sites')}
                />
                <Content>
                    <View style={paddingTop.Ten}>
                        <Text>Dashboard</Text>
                    </View>
                </Content>
            </Container>
            </StyleProvider>
        );
    }
}
const mapStateToProps = () => {   
    return {};
};

export default connect(mapStateToProps, null)(AssetLists);

const innerStyle = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
});

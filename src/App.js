import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from "./utility/theme/theme";
import { HashRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import { navigation } from './utility/Routing/SidebarNav';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HashRouter basename="/">
                <Switch>
                    <MainLayout>
                        {navigation.map((item) =>
                            <Route exact key={item.id} path={item.path} component={item.component} />
                        )}
                    </MainLayout>
                </Switch>
            </HashRouter>
        </ThemeProvider>
    );
}

export default App;
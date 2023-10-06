import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom"
import {
    ActionList,
    Frame,
    Icon,
    TopBar,
    VisuallyHidden,
    Navigation,
    Link,
    Button,
    ButtonGroup,
} from "@shopify/polaris";

import {
    HomeMajor,
    OrdersMajor,
    ProductsMajor,
    ArrowLeftMinor,
    PackageMajor,
} from "@shopify/polaris-icons";

import {
    PlayCircleMajor,
    ListMajor,
    AppsMajor,
    QuestionMarkMajor
} from '@shopify/polaris-icons';



export default function AppHeader({ children }) {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const toggleIsUserMenuOpen = useCallback(
        () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
        []
    );

    const toggleIsSecondaryMenuOpen = useCallback(
        () =>
            setIsSecondaryMenuOpen(
                (isSecondaryMenuOpen) => !isSecondaryMenuOpen
            ),
        []
    );

    const handleSearchResultsDismiss = useCallback(() => {
        setIsSearchActive(false);
        setSearchValue("");
    }, []);

    const handleSearchChange = useCallback((value) => {
        setSearchValue(value);
        setIsSearchActive(value.length > 0);
    }, []);

    const handleNavigationToggle = useCallback(() => {
        console.log("toggle navigation visibility");
    }, []);

    const menuClick = useCallback(() => {
        console.log("menuClick Tellings");
    }, []);


    const buttonClick = useCallback(() => {
        console.log("Top bar menu button click ");
    }, []);

    const tutorial = () => {
        navigate(`/Tutorial`)
    };

    const planlist = () => {
        navigate("/Planlist");
    };

    const integration = () => {
        navigate("/Integration");
    };

    const helpcenter = () => {
        navigate("/Helpcenter");
    };


    const userMenuMarkup = (
        <span style={{ float: 'right' }} className="custom-button-group-item" >
            <ButtonGroup >
                <Button onClick={tutorial} outline icon={<Icon source={PlayCircleMajor} color="white" />}>Tutorial</Button>
                <Button onClick={planlist} outline icon={<Icon source={ListMajor} color="white" />}> Plan List</Button>
                <Button onClick={integration} outline icon={<Icon source={AppsMajor} color="white" />}>Integrations</Button>
                <Button onClick={helpcenter} outline icon={<Icon source={QuestionMarkMajor} color="white" />}>Help Center</Button>
            </ButtonGroup>
        </span>
    );

    const searchResultsMarkup = (
        <ActionList
            items={[
                { content: "Shopify help center" },
                { content: "Community forums" },
            ]}
        />
    );


    const logo = {
        width: 50,
        topBarSource: "https://iconito.staging.royal-apps.io/images/iconito-1200.png",
        url: "@",
        accessibilityLabel: "Iconito - Trust badges & icons",
    };


    const searchFieldMarkup = (
        <></>
    );

    const secondaryMenuMarkup = (
        <TopBar.Menu
            activatorContent={
                <span>
                    <Link url="/users">
                        <Icon source={QuestionMarkMajor} />
                    </Link>
                    <VisuallyHidden>Secondary menu</VisuallyHidden>
                </span>
            }
            open={isSecondaryMenuOpen}
            onOpen={toggleIsSecondaryMenuOpen}
            onClose={toggleIsSecondaryMenuOpen}
            onClick={menuClick}
        />
    );

    const topBarMarkup = (
        <TopBar


            // showNavigationToggle
            // userMenu={userMenuMarkup}
            // secondaryMenu={secondaryMenuMarkup}
            // searchResultsVisible={isSearchActive}
            searchField={userMenuMarkup}
        // searchResults={searchResultsMarkup}
        // onSearchResultsDismiss={handleSearchResultsDismiss}
        // onNavigationToggle={handleNavigationToggle}
        />
    );

    const navigationMarkup = (
        <Navigation location="/">
            <Navigation.Section
                items={[
                    {
                        url: "/about",
                        label: "about",
                        icon: HomeMajor,
                    },
                    {
                        url: "/users",
                        label: "Orders",
                        icon: OrdersMajor,
                        badge: "15",
                    },
                    ,
                    {
                        url: "/packages",
                        label: "packages",
                        icon: PackageMajor,
                        badge: "15",
                    },

                    {
                        url: "/products",
                        label: "products",
                        icon: ProductsMajor,
                        badge: "15",
                    },
                ]}
            />
        </Navigation>
    );

    return (
        <div style={{ height: "250px" }}>
            <Frame
                topBar={topBarMarkup}
                logo={logo}
            // navigation={navigationMarkup}
            >
                {children}
            </Frame>
        </div>
    );
}

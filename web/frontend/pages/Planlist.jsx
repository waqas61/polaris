import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
  Badge,
  HorizontalGrid
} from "@shopify/polaris";
import { Grid, LegacyCard } from '@shopify/polaris';
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function Planlist() {
  const { t } = useTranslation();


  const SpacingBackground = ({
    children = React.ReactNode,
    width = '100%'
  }) => {
    return (
      <div
        style={{
          background: 'var(--p-color-bg-success-subdued)',
          width,
          height: 'auto',
        }}
      >
        {children}
      </div>
    );
  };

  const Placeholder = ({ height = 'auto', width = 'auto' }) => {
    return (
      <div
        style={{
          display: 'inherit',
          background: 'var(--p-color-text-info)',
          height: height ?? undefined,
          width: width ?? undefined,
        }}
      />
    );
  };



  return (
    <Page fullWidth
      backAction={{ content: 'Products', url: '/' }}
      title="Plan List"
      titleMetadata={<Badge status="success">Publish</Badge>}
    >

      <SpacingBackground>
        <HorizontalGrid gap="400" columns={3}>
          {/* <Placeholder height="320px" />
          <Placeholder height="320px" />
          <Placeholder height="320px" /> */}


          <LegacyCard title="Orders" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </LegacyCard>

          <LegacyCard title="Orders" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </LegacyCard>

          <LegacyCard title="Orders" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </LegacyCard>

          <LegacyCard title="Orders" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </LegacyCard>

          <LegacyCard title="Orders" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </LegacyCard>

          <LegacyCard title="Orders" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </LegacyCard>

          <LegacyCard title="Orders" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </LegacyCard>

          <LegacyCard title="Orders" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </LegacyCard>

          <LegacyCard title="Orders" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </LegacyCard>

        </HorizontalGrid>
      </SpacingBackground>
    </Page>
  );
}

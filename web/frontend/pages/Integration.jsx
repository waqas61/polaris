import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
  Badge
} from "@shopify/polaris";
import { LegacyCard, EmptyState } from '@shopify/polaris';
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function Integration() {
  const { t } = useTranslation();
  return (
    <Page fullWidth
      backAction={{ content: 'Products', url: '/' }}
      title="Integration"
      titleMetadata={<Badge status="success">Publish</Badge>}
    >

      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            <EmptyState
              heading="Integration"
              action={{ content: 'Integration' }}
              image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
              fullWidth
            >
              <p>
                You can use the Integrate multiple plugins.
              </p>
            </EmptyState>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

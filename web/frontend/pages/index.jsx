
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, withTranslation } from "react-i18next";
import React, { useCallback, useState, Component } from "react";
import {
  VerticalStack,
  HorizontalStack,
  Divider,
  HorizontalGrid,
  Box,
  Bleed,
  TextField,
  FormLayout,
  LegacyStack,
  RangeSlider,
  Card, Page, Layout, TextContainer, Text,
  Tabs, LegacyCard, Button,
  List,
  SkeletonBodyText,
  SkeletonDisplayText,
  Select,
  ButtonGroup,
  Checkbox,
  Tag,
  Icon,
  Banner,
  Badge
} from '@shopify/polaris';

import EmojiPicker, {
  EmojiStyle,
  SkinTones,
  Theme,
  Categories,
  Emoji,
  SuggestionMode,
  SkinTonePickerLocation
} from "emoji-picker-react";

import { WandMinor } from '@shopify/polaris-icons';
import { PopoverPicker } from "../components";

import "@shopify/polaris/build/esm/styles.css";


class Index extends Component {

  state = {
    selectedTabLeftPanel: 2,
    selectedTabRightPanel: 0,
    color: '#aabbcc',
    rangeValue: 12,
    selectedEmoji: 'waqas',
    inputValue: [],
    tabsLeft: [
      {
        id: 'block-1',
        content: (<b >BLOCK</b>),
        panelID: 'block-content-1',
      },
      {
        id: 'icons-1',
        content: (<b >ICONS</b>),
        panelID: 'icons-content-1',
      },
      {
        id: 'style-1',
        content: (<b >STYLE</b>),
        panelID: 'style-1',
      }
    ]
  };

  constructor(props) {
    super(props);
    this.handleColor = this.handleColor.bind(this);
    this.handleRangeValue = this.handleRangeValue.bind(this);
    this.handleSelectedEmoji = this.handleSelectedEmoji.bind(this);
    this.handleTabChangeLeftPanel = this.handleTabChangeLeftPanel.bind(this);
    this.handleTabChangeRightPanel = this.handleTabChangeRightPanel.bind(this);
  }

  handleSelectedEmoji(emojiData, event, selectedEmoji) {
    this.setState({ selectedEmoji: emojiData.unified });
    this.setState({
      inputValue: this.state.inputValue.concat(emojiData.emoji)
    });
  }

  handleColor(color) {
    this.setState({ color });
  }
  handleRangeValue(rangeValue) {
    this.setState({ rangeValue });
  }
  handleTabChangeLeftPanel(selectedTabLeftPanel) {
    this.setState({ selectedTabLeftPanel });
  }
  handleTabChangeRightPanel(selectedTabRightPanel) {
    this.setState({ selectedTabRightPanel });
  }
  onClick(emojiData, event) {
    this.setState({ selectedEmoji: emojiData.unified });
  }

  customBackAction(test) {

    if (this.state.selectedTabLeftPanel == 0) {
      return;
    } else if (this.state.selectedTabLeftPanel > 0) {
      this.setState({ selectedTabLeftPanel: this.state.selectedTabLeftPanel - 1 });
    }

    console.log("Youth Change", this.props.tabsLeft, test);
  }

  render() {

    const { t, customBackAction } = this.props;

    const { selectedTabLeftPanel, selectedTabRightPanel, color, rangeValue, tabsLeft } = this.state;



    const tabsRight = [
      {
        id: 'block-1',
        content: (<span >DESKTOP</span>),
        panelID: 'desktop-1',
      },
      {
        id: 'icons-1',
        content: (<span >MOBILE</span>),
        panelID: 'mobile-1',
      }
    ];

    const SkeletonLabel = (props) => {
      return (
        <Box
          background="bg-strong"
          minHeight="1rem"
          maxWidth="5rem"
          borderRadius="base"
          {...props}
        />
      );
    };


    return (
      <Page
        backAction={
          {
            content: 'sssssssSettings', onAction: () => (
              this.customBackAction(this)
            )
          }
        }
        divider
        fullWidth
        title={tabsLeft[selectedTabLeftPanel].content}

      >
        <Layout>
          <Layout.Section>
            <span id="rightTabPanel" className="custom-tab-panel">
              <Box border="divider" borderRadius="base" minHeight="2rem" />
              <Tabs tabs={tabsLeft} selected={selectedTabLeftPanel} onSelect={this.handleTabChangeLeftPanel}></Tabs>
            </span>
            <Box border="divider" borderRadius="base" minHeight="2rem" />

            {(() => {
              switch (selectedTabLeftPanel) {
                case 0: return (
                  <Card sectioned>
                    <VerticalStack>
                      <HorizontalStack>

                      </HorizontalStack>
                    </VerticalStack>
                  </Card>
                );
                case 1: return (
                  <Card sectioned>
                    <VerticalStack>
                      <HorizontalStack>
                        <EmojiPicker
                          onEmojiClick={this.handleSelectedEmoji}
                          autoFocusSearch={false}
                          emojiStyle={EmojiStyle.NATIVE}
                          // theme={Theme.AUTO}
                          // searchDisabled
                          // skinTonePickerLocation={SkinTonePickerLocation.PREVIEW}
                          // height={350}
                          width="100%"
                        // emojiVersion="0.6"
                        // lazyLoadEmojis={true}
                        // previewConfig={{
                        //   defaultCaption: "Pick one!",
                        //   defaultEmoji: "1f92a" // 🤪
                        // }}
                        // suggestedEmojisMode={SuggestionMode.RECENT}
                        // skinTonesDisabled
                        // searchPlaceHolder="Filter"
                        // defaultSkinTone={SkinTones.MEDIUM}
                        // emojiStyle={EmojiStyle.NATIVE}
                        // categories={[
                        //   {
                        //     name: "Fun and Games",
                        //     category: Categories.ACTIVITIES
                        //   },
                        //   {
                        //     name: "Smiles & Emotions",
                        //     category: Categories.SMILEYS_PEOPLE
                        //   },
                        //   {
                        //     name: "Flags",
                        //     category: Categories.FLAGS
                        //   },
                        //   {
                        //     name: "Yum Yum",
                        //     category: Categories.FOOD_DRINK
                        //   }
                        // ]}
                        // customEmojis={[
                        //   {
                        //     names: ["Alice", "alice in wonderland"],
                        //     imgUrl:
                        //       "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/alice.png",
                        //     id: "alice"
                        //   },
                        //   {
                        //     names: ["Dog"],
                        //     imgUrl:
                        //       "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/dog.png",
                        //     id: "dog"
                        //   },
                        //   {
                        //     names: ["Hat"],
                        //     imgUrl:
                        //       "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/hat.png",
                        //     id: "hat"
                        //   },
                        //   {
                        //     names: ["Kid"],
                        //     imgUrl:
                        //       "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/kid.png",
                        //     id: "kid"
                        //   },
                        //   {
                        //     names: ["Mic"],
                        //     imgUrl:
                        //       "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/mic.png",
                        //     id: "mic"
                        //   },
                        //   {
                        //     names: ["Moab", "desert"],
                        //     imgUrl:
                        //       "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/moab.png",
                        //     id: "moab"
                        //   },
                        //   {
                        //     names: ["Potter", "harry", "harry potter"],
                        //     imgUrl:
                        //       "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/potter.png",
                        //     id: "potter"
                        //   },
                        //   {
                        //     names: ["Shroom", "mushroom"],
                        //     imgUrl:
                        //       "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/shroom.png",
                        //     id: "shroom"
                        //   },
                        //   {
                        //     names: ["Smily"],
                        //     imgUrl:
                        //       "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/smily.png",
                        //     id: "smily"
                        //   },
                        //   {
                        //     names: ["Tabby", "cat"],
                        //     imgUrl:
                        //       "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/tabby.png",
                        //     id: "tabby"
                        //   },
                        //   {
                        //     names: ["Vest"],
                        //     imgUrl:
                        //       "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/vest.png",
                        //     id: "vest"
                        //   }
                        // ]}
                        />
                      </HorizontalStack>
                    </VerticalStack>
                  </Card>
                );
                case 2: return (
                  <Card sectioned>
                    <HorizontalGrid columns={1} gap="400">
                      <VerticalStack gap={{ xs: "400", md: "200" }}>


                        <VerticalStack gap="400">
                          <Text variant="headingMd" as="h4"><b> ICON SIZE </b></Text>
                          <HorizontalStack>
                            <HorizontalStack gap="400" wrap={false} blockAlign="center">
                              <div style={{ height: '50px', width: '630px', marginTop: '20px' }}>
                                <RangeSlider value={rangeValue} onChange={this.handleRangeValue} />
                              </div>
                              <div style={{ height: '50px', width: '100px', marginLeft: '10px' }}>
                                <TextField type="number" value={rangeValue} onChange={this.handleRangeValue} autoComplete="off" labelHidden />
                              </div>
                            </HorizontalStack>
                          </HorizontalStack>
                          <Box><Bleed marginInline={{ xs: 400, sm: 500 }}><Divider /></Bleed></Box>
                        </VerticalStack>


                        <VerticalStack gap="400">
                          <Box border="divider" borderRadius="base" minHeight="2rem" />
                          <Text variant="headingMd" as="h4"><b> COLORS </b></Text>

                          <FormLayout>
                            <FormLayout.Group condensed>
                              <LegacyStack distribution="fillEvenly">
                                <LegacyStack.Item >Background Color</LegacyStack.Item>
                                <PopoverPicker color={color} onChange={this.handleColor} />
                              </LegacyStack>
                              <LegacyStack distribution="fillEvenly">
                                <LegacyStack.Item >Title Color</LegacyStack.Item>
                                <PopoverPicker color={color} onChange={this.handleColor} />
                              </LegacyStack>
                            </FormLayout.Group>
                            <FormLayout.Group condensed>
                              <LegacyStack distribution="fillEvenly">
                                <LegacyStack.Item >Icon Color</LegacyStack.Item>
                                <PopoverPicker color={color} onChange={this.handleColor} />
                              </LegacyStack>
                              <LegacyStack distribution="fillEvenly">
                                <LegacyStack.Item >Subtitle Color</LegacyStack.Item>
                                <PopoverPicker color={color} onChange={this.handleColor} />
                              </LegacyStack>
                            </FormLayout.Group>
                          </FormLayout>


                          <Checkbox label="Transparent Backgroung" />

                          <Box><Bleed marginInline={{ xs: 400, sm: 500 }}><Divider /></Bleed></Box>

                        </VerticalStack>


                        <VerticalStack gap="400">
                          <Box border="divider" borderRadius="base" minHeight="2rem" />
                          <Text variant="headingMd" as="h4"><b> TYPOGRAPHY </b></Text>
                          <HorizontalStack>
                            <HorizontalStack gap="400" wrap={false} blockAlign="center">

                              <FormLayout>
                                <FormLayout.Group >
                                  <TextField
                                    type="number"
                                    label="Title Font Size"
                                    onChange={() => { }}
                                    autoComplete="off"
                                  />
                                  <TextField
                                    type="number"
                                    label="Title Font Style"
                                    onChange={() => { }}
                                    autoComplete="off"
                                  />
                                </FormLayout.Group>
                              </FormLayout>

                              <FormLayout>
                                <FormLayout.Group>
                                  <TextField
                                    type="number"
                                    label="Subtitle Font Size"
                                    onChange={() => { }}
                                    autoComplete="off"
                                  />
                                  <TextField
                                    type="number"
                                    label="Subtitle Font Style"
                                    onChange={() => { }}
                                    autoComplete="off"
                                  />
                                </FormLayout.Group>
                              </FormLayout>

                            </HorizontalStack>
                          </HorizontalStack>
                          <Box><Bleed marginInline={{ xs: 400, sm: 500 }}><Divider /></Bleed></Box>
                        </VerticalStack>


                        <VerticalStack gap="400">
                          <Box border="divider" borderRadius="base" minHeight="2rem" />
                          <Text variant="headingMd" as="h4"><b> SPACING </b></Text>
                          <HorizontalStack>
                            <HorizontalStack gap="400" wrap={false} blockAlign="center">

                              <div style={{ height: '50px', width: '630px', marginTop: '20px' }}>
                                <RangeSlider value={rangeValue} onChange={this.handleRangeValue} />
                              </div>
                              <div style={{ height: '50px', width: '100px', marginLeft: '10px' }}>
                                <TextField type="number" value={rangeValue} onChange={this.handleRangeValue} autoComplete="off" labelHidden />
                              </div>
                            </HorizontalStack>
                          </HorizontalStack>
                          <Box><Bleed marginInline={{ xs: 400, sm: 500 }}><Divider /></Bleed></Box>
                        </VerticalStack>


                        <VerticalStack gap="400">
                          <Box border="divider" borderRadius="base" minHeight="2rem" />
                          <Text variant="headingMd" as="h4"><b> BORDER LOCATION </b></Text>
                          <FormLayout>
                            <FormLayout.Group >
                              <TextField
                                type="number"
                                label="Title Font Size"
                                onChange={() => { }}
                                autoComplete="off"
                              />
                              <TextField
                                type="number"
                                label="Subtitle Font Size"
                                onChange={() => { }}
                                autoComplete="off"
                              />
                            </FormLayout.Group>
                          </FormLayout>

                          <HorizontalStack>
                            <HorizontalStack gap="400" wrap={false} blockAlign="center">
                              <div style={{ height: '50px', width: '630px', marginTop: '20px' }}>
                                <RangeSlider value={rangeValue} onChange={this.handleRangeValue} />
                              </div>
                              <div style={{ height: '50px', width: '100px', marginLeft: '10px' }}>
                                <TextField type="number" value={rangeValue} onChange={this.handleRangeValue} autoComplete="off" labelHidden />
                              </div>
                            </HorizontalStack>
                          </HorizontalStack>
                        </VerticalStack>


                        {/* <SkeletonLabel />
                          <Box border="divider" borderRadius="base" minHeight="2rem" />
                          <SkeletonLabel maxWidth="4rem" />
                          <Box border="divider" borderRadius="base" minHeight="2rem" />
                          <SkeletonLabel />
                          <SkeletonBodyText /> */}


                      </VerticalStack>
                    </HorizontalGrid>
                  </Card>
                );
              }
            })()}

            <Card sectioned>
              <HorizontalGrid columns={1} gap="400">
                <VerticalStack gap={{ xs: "400", md: "200" }}>
                  <ButtonGroup>
                    <Button size="large">Save</Button>
                    <Button destructive size="large">Delete</Button>
                  </ButtonGroup>

                </VerticalStack>
              </HorizontalGrid>
            </Card>

          </Layout.Section>
          <Layout.Section secondary>

            <Card sectioned>
              <span id="leftTabPanel" className="custom-tab-panel">
                <Box border="divider" borderRadius="base" minHeight="1rem" />
                <Tabs tabs={tabsRight} selected={selectedTabRightPanel} onSelect={this.handleTabChangeRightPanel}></Tabs>
              </span>
              <Box border="divider" borderRadius="base" minHeight="2rem" />
              {(() => {
                switch (selectedTabRightPanel) {
                  case 0: return (
                    <Card background="bg-subdued" roundedAbove="md" sectioned >
                      <TextContainer>
                        <Emoji unified={this.state.selectedEmoji} size={77} />
                      </TextContainer>
                    </Card>
                  );
                  case 1: return (
                    <Card background="bg-subdued" roundedAbove="md" sectioned >
                      <Text variant="headingMd" as="h2">
                        {t("PageName.heading")}
                      </Text>
                      <TextContainer>
                        {selectedTabRightPanel}
                        <p>{t("PageName.body")}</p>
                      </TextContainer>
                    </Card>
                  );
                }
              })()}
            </Card>

            <Box border="divider" borderRadius="base" minHeight="2rem" />
            <Banner
              title="Some of your product variants are missing weights"
              status="warning"
              secondaryAction={{ content: 'Learn more', url: '' }}
              onDismiss={() => { }}
            >
              <p>
                Add weights to show accurate rates at checkout and when buying shipping
                labels in Shopify.
              </p>
            </Banner>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
}

export default withTranslation()(Index);
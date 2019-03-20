import React from "react"
import { storiesOf } from "@storybook/react"
import { Pane, ThemeProvider } from "fannypack"
import Textbox from "../components/textbox"

const stories = storiesOf("Components/Textbox", module)
stories.addDecorator(story => (
  <ThemeProvider>
    <Pane padding="major-2">{story()}</Pane>
  </ThemeProvider>
))
stories.add("default", () => <Textbox />)

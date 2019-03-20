import React from "react"
import { storiesOf } from "@storybook/react"
import { Pane, ThemeProvider } from "fannypack"
import Toolbar from "../components/toolbar"

const stories = storiesOf("Components/Toolbar", module)
stories.addDecorator(story => (
  <ThemeProvider>
    <Pane padding="major-2">{story()}</Pane>
  </ThemeProvider>
))
stories.add("default", () => <Toolbar />)

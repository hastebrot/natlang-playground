import React from "react"
import { storiesOf } from "@storybook/react"
import { Pane, ThemeProvider } from "fannypack"
import Demo from "../pages/demo"

const stories = storiesOf("Pages/Demo", module)
stories.addDecorator(story => (
  <ThemeProvider>
    <Pane padding="major-2">{story()}</Pane>
  </ThemeProvider>
))
stories.add("default", () => <Demo />)

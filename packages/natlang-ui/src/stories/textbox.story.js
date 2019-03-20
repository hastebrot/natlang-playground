import React from "react"
import { storiesOf } from "@storybook/react"
import Textbox from "../components/textbox"

const stories = storiesOf("Components/Textbox", module)
stories.add("default", () => <Textbox />)

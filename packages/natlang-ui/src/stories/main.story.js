import React from "react"
import { storiesOf } from "@storybook/react"
import Main from "../components/main"

const stories = storiesOf("Components/Main", module)
stories.add("default", () => <Main />)

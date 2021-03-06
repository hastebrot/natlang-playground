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
stories.add("with paragraph select", () => (
  <Textbox paragraphs={paragraphs} select="paragraph" />
))
stories.add("with word select", () => (
  <Textbox paragraphs={paragraphs} select="word" />
))

const paragraphs = `
Ils formaient une assemblée bien grotesque ces êtres singuliers réunis sur le bord de la mare ; les uns avaient leurs plumes tout en désordre, les autres le poil plaqué contre le corps. Tous étaient trempés, de mauvaise humeur, et fort mal à l’aise.

« Comment faire pour nous sécher ? » ce fut la première question, cela va sans dire. Au bout de quelques instants, il sembla tout naturel à Alice de causer familièrement avec ces animaux, comme si elle les connaissait depuis son berceau. Elle eut même une longue discussion avec le Lory, qui, à la fin, lui fit la mine et lui dit d’un air boudeur : « Je suis plus âgé que vous, et je dois par conséquent en savoir plus long. » Alice ne voulut pas accepter cette conclusion avant de savoir l’âge du Lory, et comme celui-ci refusa tout net de le lui dire, cela mit un terme au débat.

Enfin la Souris, qui paraissait avoir un certain ascendant sur les autres, leur cria : « Asseyez-vous tous, et écoutez-moi ! Je vais bientôt vous faire sécher, je vous en réponds ! » Vite, tout le monde s’assit en rond autour de la Souris, sur qui Alice tenait les yeux fixés avec inquiétude, car elle se disait : « Je vais attraper un vilain rhume si je ne sèche pas bientôt. »

« Hum ! » fit la Souris d’un air d’importance ; « êtes-vous prêts ? Je ne sais rien de plus sec que ceci. Silence dans le cercle, je vous prie. « Guillaume le Conquérant, dont le pape avait embrassé le parti, soumit bientôt les Anglais, qui manquaient de chefs, et commençaient à s’accoutumer aux usurpations et aux conquêtes des étrangers. Edwin et Morcar, comtes de Mercie et de Northumbrie — » »
`

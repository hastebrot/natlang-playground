import React, { Fragment, useState, useContext, useRef, useEffect } from "react"
import { Pane, Box, Flex, Set } from "fannypack"
import Toolbar from "../components/toolbar"
import Textbox from "../components/textbox"
import Editbox from "../components/editbox"

export default () => {
  const paragraphs = `
Ils formaient une assemblée bien grotesque ces êtres singuliers réunis sur le bord de la mare ; les uns avaient leurs plumes tout en désordre, les autres le poil plaqué contre le corps. Tous étaient trempés, de mauvaise humeur, et fort mal à l’aise.

« Comment faire pour nous sécher ? » ce fut la première question, cela va sans dire. Au bout de quelques instants, il sembla tout naturel à Alice de causer familièrement avec ces animaux, comme si elle les connaissait depuis son berceau. Elle eut même une longue discussion avec le Lory, qui, à la fin, lui fit la mine et lui dit d’un air boudeur : « Je suis plus âgé que vous, et je dois par conséquent en savoir plus long. » Alice ne voulut pas accepter cette conclusion avant de savoir l’âge du Lory, et comme celui-ci refusa tout net de le lui dire, cela mit un terme au débat.

Enfin la Souris, qui paraissait avoir un certain ascendant sur les autres, leur cria : « Asseyez-vous tous, et écoutez-moi ! Je vais bientôt vous faire sécher, je vous en réponds ! » Vite, tout le monde s’assit en rond autour de la Souris, sur qui Alice tenait les yeux fixés avec inquiétude, car elle se disait : « Je vais attraper un vilain rhume si je ne sèche pas bientôt. »

« Hum ! » fit la Souris d’un air d’importance ; « êtes-vous prêts ? Je ne sais rien de plus sec que ceci. Silence dans le cercle, je vous prie. « Guillaume le Conquérant, dont le pape avait embrassé le parti, soumit bientôt les Anglais, qui manquaient de chefs, et commençaient à s’accoutumer aux usurpations et aux conquêtes des étrangers. Edwin et Morcar, comtes de Mercie et de Northumbrie — » »
`
  const [select, setSelect] = useState("word")
  const [edit, setEdit] = useState(true)
  const audioRef = useRef()
  useEffect(() => {
    const audioSource = require("../assets/c3.ogg")
    const audio = audioRef.current
    audio.src = audioSource
    audio.type = "audio/ogg"
    audio.currentTime = 13.5
  }, [audioRef.current])

  return (
    <Flex column>
      <audio ref={audioRef} controls style={{ outline: "none", borderRadius: 0, width: "100%" }} />
      <Pane padding="major-1" backgroundColor="white700">
        <Set isVertical isFilled>
          <Toolbar
            select={select}
            setSelect={setSelect}
            edit={edit}
            setEdit={setEdit}
          />
          <Flex row>
            <Textbox paragraphs={paragraphs} select={select} />
            {edit && <Editbox minWidth="30%">edit</Editbox>}
          </Flex>
        </Set>
      </Pane>
    </Flex>
  )
}

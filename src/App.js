import React from "react";
import "./App.css";

// ICONS
import {
  Smile,
  MessageSquare,
  Phone,
  Map,
  AtSign,
  GitHub,
  Settings,
  PlusCircle,
  Plus,
  Briefcase,
  Award,
  Heart,
  Globe
} from "react-feather";

// COMPONENTS
import IdPhoto from "./components/IdPhoto";
import Section from "./components/Section";
import IconListItem from "./components/IconListItem";

// DATA
import cedricPradelsData from "./assets/datas/dataCedricPradels";

function App() {
  return (
    <>
      <aside>
        <IdPhoto />
        <Section title="Qui suis-je ?" icon={<Smile />}>
          <p style={{ textAlign: "justify" }}>
            {cedricPradelsData.profil.shortDescription}
          </p>
        </Section>

        <Section title="Contact" icon={<MessageSquare />}>
          <ul>
            <IconListItem icon={<Phone />}>
              {cedricPradelsData.profil.phone}
            </IconListItem>
            <IconListItem icon={<AtSign />}>
              {cedricPradelsData.profil.email}
            </IconListItem>
            <IconListItem icon={<Map />}>
              {cedricPradelsData.profil.adress.line1}
              <br />
              {cedricPradelsData.profil.adress.line2}
            </IconListItem>
            <IconListItem icon={<GitHub />}>
              {cedricPradelsData.profil.github}
            </IconListItem>
          </ul>
        </Section>

        <Section title="Qualités" icon={<PlusCircle />}>
          <ul>
            {cedricPradelsData.profil.capacity.map(item => {
              return (
                <IconListItem key={item} icon={<Plus />}>
                  {item}
                </IconListItem>
              );
            })}
          </ul>
        </Section>

        <Section icon={<Heart />} title={"Hobbies"}>
          <ul style={{ listStyle: "square" }}>
            {cedricPradelsData.profil.hobbies.map(hobbie => {
              return (
                <IconListItem key={hobbie} icon={<Plus />}>
                  {hobbie}
                </IconListItem>
              );
            })}
          </ul>
        </Section>
      </aside>
      <main>
        <div>
          <header>
            <h1>
              {cedricPradelsData.profil.nom} {cedricPradelsData.profil.prenom}
            </h1>
            <h2>{cedricPradelsData.profil.title}</h2>
          </header>
        </div>

        <Section title="Expériences" icon={<Briefcase />}>
          {cedricPradelsData.categories.experiences.map(experience => {
            return (
              <>
                <h3>
                  {`${experience.company} — ${experience.title} — 
                ${experience.year.start}-${experience.year.end}`}
                </h3>
                <p>{experience.description}</p>
              </>
            );
          })}
        </Section>
        <Section title="Formations" icon={<Award />}>
          {cedricPradelsData.categories.formations.map(formation => {
            return (
              <>
                <h3>
                  {`${formation.shortTitle} — ${formation.entitled} — 
                ${formation.year}`}
                </h3>
                <p>{formation.description}</p>
              </>
            );
          })}
        </Section>

        <Section title="Technos" icon={<Settings />}>
          <ul className="twoColumns">
            {cedricPradelsData.categories.skills[1].values.map(skill => {
              return (
                <IconListItem
                  key={skill.value}
                  icon={<img src={skill.thumbnail} />}
                >
                  {skill.value}
                </IconListItem>
              );
            })}
          </ul>
        </Section>

        <Section title="Langues" icon={<Globe />}>
          <ul>
            {cedricPradelsData.categories.skills[0].values.map(langue => {
              return (
                <IconListItem icon={<img src={langue.thumbnail} />}>
                  {langue.value} : {langue.level}
                </IconListItem>
              );
            })}
          </ul>
        </Section>
      </main>
    </>
  );
}

export default App;

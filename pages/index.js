import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Analytics from '@components/Analytics'
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "True Link",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
];

const columns = [
  {
    key: "company",
    label: "COMPANY",
  },
  {
    key: "stage",
    label: "STAGE",
  },
  {
    key: "type",
    label: "TYPE",
  },
];

export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>Early stage investor. salamander.vc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Analytics/>
      <main>
        <Header title="salamander.vc" />
        <p className="description">
          Backing great founders & companies
        </p>
        <p className="description">
        <code>intro@salamander.vc</code>
        </p>
        ACTIVE
        <ul>
          <li><a href="https://www.truelink.com" target="_blank">True Link</a> <button>Fintech</button></li>
          <li><a href="https://www.videoslick.com" target="_blank">VideoSlick</a> <button>AI/ML</button></li>
          <li><a href="https://realitydefender.com/" target="_blank">Reality Defender</a> <button>AI/ML</button></li>
          <li><a href="https://repromptai.com/" target="_blank">Reprompt AI</a> <button>AI/ML</button></li>
          <li><a href="https://secureframe.com/" target="_blank">Secureframe</a> <button>B2B</button></li>
          <li><a href="https://www.haveignition.com/" target="_blank">Ignition</a> <button>B2B</button></li>
          <li><a href="https://genus.ai/" target="_blank">Genus AI</a> <button>B2B</button></li>
          <li><a href="https://www.appcues.com/" target="_blank">Appcues</a> <button>B2B</button></li>
          <li><a href="https://appvance.ai/" target="_blank">Appvance.ai</a> <button>B2B</button> </li>
          <li><a href="https://localizejs.com/" target="_blank">localize.js</a> <button>B2B</button></li>
          <li><a href="https://www.airhouse.io/" target="_blank">airhouse</a> <button>B2B</button></li>
          <li><a href="https://www.hireguide.com/" target="_blank">Hireguide</a> <button>B2B</button></li>

          <li><a href="https://www.anyplace.com/" target="_blank">Anyplace</a> <button>B2C</button></li>
        </ul>


        <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
        EXIT
        <ul>
          <li>Postmates (acq by Uber)</li>
          <li>Blue Bottle (acq by Nestle)</li>
          <li>Respondly (acq by Buffer)</li>
          <li>Bitfusion.io (acq by VMWare)</li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}

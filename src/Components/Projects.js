import React from 'react'
import './Projects.css'
import Card from './Card'
export default function Projects() {
  return (
    <div className='m'>
      <div className="projects">PROJECTS</div>
      <div className="pro">
        <Card title='Cross-Chain NFT Bridge' about='ERC721 Tokens (or NFTs) are getting really popular. But currently we donot have any cross-chain bridge for NFTs. Cross-chain bridges focus mainly on ERC20 Tokens. So as part of the Pan-IIT Blockchain Hackathon organized by IIT Bombay, me and my team worked on creating a NFT bridge between Ethereum, Solana and Avalanche.' github='https://github.com/AMANKANOJIYA/BlockChainIITB' tech='Tech Stack: Node.js, React JS, Solidity, Metaplex,
Web3.js, Solana Web3.js, IPFS using Pinata'/>
        <Card title='Decentratube' about='A Decentralized youtube clone where the user can upload images on ipfs and view all the other videos as well.' github='https://github.com/Kushagra733/decentratube' tech='Tech Stack: React.js, IPFS, Solidity, Web3.js ,Ganache'/>
        <Card title='Appointment' about='A Full Stack Application that makes an appointment with doctor at a specific date and time.Login and Signup Pages also integrated' github='https://github.com/Kushagra733/Appointment' tech='Tech Stack: Node.js, Express.js,MongoDB,React.js'/>
        <Card title='NFT Minter' about='An NFT-Minter Decentraliszed Application that takes a file as an input and mint an NFT to the address connected by metamask.The smart contract is deployed to the Rinkeby Test Network through remix.'  github='https://github.com/Kushagra733/nftminter' tech='Tech Stack: React.js, IPFS, Solidity, Web3.js'/>

      </div>
    </div>
  )
}

import { useState } from "react";
import "./lottery.css";
import Ticket from "./Ticket";
import { genTicket, sum } from "./Helper";

export default function Lottery({n, winningSum}) {
   let[ticket, setTicket]= useState(genTicket(n));
   let isWinning = sum(ticket) === winningSum;

   let buyTicket = () => {
      setTicket(genTicket(n));
   };

   return (
      <div>
         <h1 className="game">Lottery Game!</h1>
         <Ticket ticket={ticket} />
         <button onClick={buyTicket}>Buy New Ticket</button>
         <h3 id="won">{isWinning && "Congratulation, You won!"}</h3>
      </div>
   );
}
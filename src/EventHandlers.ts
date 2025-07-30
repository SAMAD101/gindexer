import { ERC20 } from "generated";

ERC20.Transfer.handler(
  async ({ event, context }) => {
    context.Transfer.set({
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      from: event.params.from,
      to: event.params.to,
      blockNumber: event.block.number,
      logIndex: event.logIndex,
    });
  },
  { wildcard: true }
);


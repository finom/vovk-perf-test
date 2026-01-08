import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nft")
export default class NftController {
  @operation({
    summary: "Get Nft",
  })
  @get()
  static getNft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nft",
  })
  @post("{id}")
  static createNft = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

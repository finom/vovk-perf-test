import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfts")
export default class NftController {
  @operation({
    summary: "Get Nfts",
  })
  @get()
  static getNfts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nft",
  })
  @post("{id}")
  static createNft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

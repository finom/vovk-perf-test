import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfts")
export default class NftController {
  @operation({
    summary: "Get Nfts",
  })
  @get()
  static getNfts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nft",
  })
  @post("{id}")
  static createNft = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfj")
export default class NfjController {
  @operation({
    summary: "Get Nfj",
  })
  @get()
  static getNfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfj",
  })
  @post("{id}")
  static createNfj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

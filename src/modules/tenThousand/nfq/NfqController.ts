import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfq")
export default class NfqController {
  @operation({
    summary: "Get Nfq",
  })
  @get()
  static getNfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfq",
  })
  @post("{id}")
  static createNfq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

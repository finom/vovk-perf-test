import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfh")
export default class NfhController {
  @operation({
    summary: "Get Nfh",
  })
  @get()
  static getNfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfh",
  })
  @post("{id}")
  static createNfh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

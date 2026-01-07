import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfz")
export default class NfzController {
  @operation({
    summary: "Get Nfz",
  })
  @get()
  static getNfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfz",
  })
  @post("{id}")
  static createNfz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

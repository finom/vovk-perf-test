import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfr")
export default class NfrController {
  @operation({
    summary: "Get Nfr",
  })
  @get()
  static getNfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfr",
  })
  @post("{id}")
  static createNfr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

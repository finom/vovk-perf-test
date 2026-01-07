import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nst")
export default class NstController {
  @operation({
    summary: "Get Nst",
  })
  @get()
  static getNst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nst",
  })
  @post("{id}")
  static createNst = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

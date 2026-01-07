import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfu")
export default class NfuController {
  @operation({
    summary: "Get Nfu",
  })
  @get()
  static getNfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfu",
  })
  @post("{id}")
  static createNfu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

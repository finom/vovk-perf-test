import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdg")
export default class CdgController {
  @operation({
    summary: "Get Cdg",
  })
  @get()
  static getCdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdg",
  })
  @post("{id}")
  static createCdg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgm")
export default class MgmController {
  @operation({
    summary: "Get Mgm",
  })
  @get()
  static getMgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgm",
  })
  @post("{id}")
  static createMgm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

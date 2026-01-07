import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgd")
export default class MgdController {
  @operation({
    summary: "Get Mgd",
  })
  @get()
  static getMgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgd",
  })
  @post("{id}")
  static createMgd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

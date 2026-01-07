import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgp")
export default class MgpController {
  @operation({
    summary: "Get Mgp",
  })
  @get()
  static getMgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgp",
  })
  @post("{id}")
  static createMgp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

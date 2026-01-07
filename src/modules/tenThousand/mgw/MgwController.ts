import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgw")
export default class MgwController {
  @operation({
    summary: "Get Mgw",
  })
  @get()
  static getMgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgw",
  })
  @post("{id}")
  static createMgw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

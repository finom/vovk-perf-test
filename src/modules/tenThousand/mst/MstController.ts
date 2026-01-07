import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mst")
export default class MstController {
  @operation({
    summary: "Get Mst",
  })
  @get()
  static getMst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mst",
  })
  @post("{id}")
  static createMst = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

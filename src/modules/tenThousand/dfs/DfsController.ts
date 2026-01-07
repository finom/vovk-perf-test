import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfs")
export default class DfsController {
  @operation({
    summary: "Get Dfs",
  })
  @get()
  static getDfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfs",
  })
  @post("{id}")
  static createDfs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

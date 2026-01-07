import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfs")
export default class BfsController {
  @operation({
    summary: "Get Bfs",
  })
  @get()
  static getBfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfs",
  })
  @post("{id}")
  static createBfs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

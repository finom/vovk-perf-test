import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dij")
export default class DijController {
  @operation({
    summary: "Get Dij",
  })
  @get()
  static getDij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dij",
  })
  @post("{id}")
  static createDij = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

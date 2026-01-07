import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clu")
export default class CluController {
  @operation({
    summary: "Get Clu",
  })
  @get()
  static getClu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clu",
  })
  @post("{id}")
  static createClu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

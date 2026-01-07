import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lca")
export default class LcaController {
  @operation({
    summary: "Get Lca",
  })
  @get()
  static getLca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lca",
  })
  @post("{id}")
  static createLca = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

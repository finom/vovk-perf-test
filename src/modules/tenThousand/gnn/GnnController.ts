import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnn")
export default class GnnController {
  @operation({
    summary: "Get Gnn",
  })
  @get()
  static getGnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnn",
  })
  @post("{id}")
  static createGnn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

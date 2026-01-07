import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cex")
export default class CexController {
  @operation({
    summary: "Get Cex",
  })
  @get()
  static getCex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cex",
  })
  @post("{id}")
  static createCex = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

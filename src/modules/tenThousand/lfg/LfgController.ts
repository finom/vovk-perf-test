import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfg")
export default class LfgController {
  @operation({
    summary: "Get Lfg",
  })
  @get()
  static getLfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfg",
  })
  @post("{id}")
  static createLfg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

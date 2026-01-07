import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfv")
export default class LfvController {
  @operation({
    summary: "Get Lfv",
  })
  @get()
  static getLfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfv",
  })
  @post("{id}")
  static createLfv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

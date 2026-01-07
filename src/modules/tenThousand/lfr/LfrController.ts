import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfr")
export default class LfrController {
  @operation({
    summary: "Get Lfr",
  })
  @get()
  static getLfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfr",
  })
  @post("{id}")
  static createLfr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

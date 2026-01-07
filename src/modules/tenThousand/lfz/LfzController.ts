import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfz")
export default class LfzController {
  @operation({
    summary: "Get Lfz",
  })
  @get()
  static getLfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfz",
  })
  @post("{id}")
  static createLfz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

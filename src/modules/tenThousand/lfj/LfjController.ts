import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfj")
export default class LfjController {
  @operation({
    summary: "Get Lfj",
  })
  @get()
  static getLfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfj",
  })
  @post("{id}")
  static createLfj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

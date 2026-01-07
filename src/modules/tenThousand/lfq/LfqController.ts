import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfq")
export default class LfqController {
  @operation({
    summary: "Get Lfq",
  })
  @get()
  static getLfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfq",
  })
  @post("{id}")
  static createLfq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrr")
export default class MrrController {
  @operation({
    summary: "Get Mrr",
  })
  @get()
  static getMrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrr",
  })
  @post("{id}")
  static createMrr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

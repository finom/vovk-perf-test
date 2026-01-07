import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fts")
export default class FtsController {
  @operation({
    summary: "Get Fts",
  })
  @get()
  static getFts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fts",
  })
  @post("{id}")
  static createFts = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

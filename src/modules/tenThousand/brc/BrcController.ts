import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brc")
export default class BrcController {
  @operation({
    summary: "Get Brc",
  })
  @get()
  static getBrc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brc",
  })
  @post("{id}")
  static createBrc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

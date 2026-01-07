import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bql")
export default class BqlController {
  @operation({
    summary: "Get Bql",
  })
  @get()
  static getBql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bql",
  })
  @post("{id}")
  static createBql = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

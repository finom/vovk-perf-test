import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxn")
export default class BxnController {
  @operation({
    summary: "Get Bxn",
  })
  @get()
  static getBxn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxn",
  })
  @post("{id}")
  static createBxn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

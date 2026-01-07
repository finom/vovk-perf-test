import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfn")
export default class BfnController {
  @operation({
    summary: "Get Bfn",
  })
  @get()
  static getBfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfn",
  })
  @post("{id}")
  static createBfn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

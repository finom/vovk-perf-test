import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bop")
export default class BopController {
  @operation({
    summary: "Get Bop",
  })
  @get()
  static getBop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bop",
  })
  @post("{id}")
  static createBop = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

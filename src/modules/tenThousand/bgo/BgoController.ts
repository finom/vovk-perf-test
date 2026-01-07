import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgo")
export default class BgoController {
  @operation({
    summary: "Get Bgo",
  })
  @get()
  static getBgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgo",
  })
  @post("{id}")
  static createBgo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

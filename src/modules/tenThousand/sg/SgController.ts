import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sg")
export default class SgController {
  @operation({
    summary: "Get Sg",
  })
  @get()
  static getSg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sg",
  })
  @post("{id}")
  static createSg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

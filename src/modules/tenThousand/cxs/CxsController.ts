import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxs")
export default class CxsController {
  @operation({
    summary: "Get Cxs",
  })
  @get()
  static getCxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxs",
  })
  @post("{id}")
  static createCxs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

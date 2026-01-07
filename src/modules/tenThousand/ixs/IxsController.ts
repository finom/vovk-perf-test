import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixs")
export default class IxsController {
  @operation({
    summary: "Get Ixs",
  })
  @get()
  static getIxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixs",
  })
  @post("{id}")
  static createIxs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgr")
export default class DgrController {
  @operation({
    summary: "Get Dgr",
  })
  @get()
  static getDgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgr",
  })
  @post("{id}")
  static createDgr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

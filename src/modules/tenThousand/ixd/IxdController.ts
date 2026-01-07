import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixd")
export default class IxdController {
  @operation({
    summary: "Get Ixd",
  })
  @get()
  static getIxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixd",
  })
  @post("{id}")
  static createIxd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

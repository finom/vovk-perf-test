import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zt")
export default class ZtController {
  @operation({
    summary: "Get Zt",
  })
  @get()
  static getZt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zt",
  })
  @post("{id}")
  static createZt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

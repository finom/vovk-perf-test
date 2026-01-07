import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zb")
export default class ZbController {
  @operation({
    summary: "Get Zb",
  })
  @get()
  static getZb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zb",
  })
  @post("{id}")
  static createZb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

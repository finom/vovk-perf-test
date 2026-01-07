import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zw")
export default class ZwController {
  @operation({
    summary: "Get Zw",
  })
  @get()
  static getZw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zw",
  })
  @post("{id}")
  static createZw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ext")
export default class ExtController {
  @operation({
    summary: "Get Ext",
  })
  @get()
  static getExt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ext",
  })
  @post("{id}")
  static createExt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

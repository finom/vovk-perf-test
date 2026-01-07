import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xe")
export default class XeController {
  @operation({
    summary: "Get Xe",
  })
  @get()
  static getXe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xe",
  })
  @post("{id}")
  static createXe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

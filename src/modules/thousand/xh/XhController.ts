import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xh")
export default class XhController {
  @operation({
    summary: "Get Xh",
  })
  @get()
  static getXh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xh",
  })
  @post("{id}")
  static createXh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

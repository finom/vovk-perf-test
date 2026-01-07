import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xw")
export default class XwController {
  @operation({
    summary: "Get Xw",
  })
  @get()
  static getXw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xw",
  })
  @post("{id}")
  static createXw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

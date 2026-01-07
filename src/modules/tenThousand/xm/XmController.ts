import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xm")
export default class XmController {
  @operation({
    summary: "Get Xm",
  })
  @get()
  static getXm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xm",
  })
  @post("{id}")
  static createXm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

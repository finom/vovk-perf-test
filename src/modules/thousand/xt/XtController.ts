import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xt")
export default class XtController {
  @operation({
    summary: "Get Xt",
  })
  @get()
  static getXt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xt",
  })
  @post("{id}")
  static createXt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

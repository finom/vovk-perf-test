import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xv")
export default class XvController {
  @operation({
    summary: "Get Xv",
  })
  @get()
  static getXv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xv",
  })
  @post("{id}")
  static createXv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

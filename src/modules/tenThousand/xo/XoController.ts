import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xo")
export default class XoController {
  @operation({
    summary: "Get Xo",
  })
  @get()
  static getXo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xo",
  })
  @post("{id}")
  static createXo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

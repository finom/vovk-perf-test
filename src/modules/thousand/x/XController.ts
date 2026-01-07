import { procedure, prefix, get, post, operation } from "vovk";

@prefix("x")
export default class XController {
  @operation({
    summary: "Get X",
  })
  @get()
  static getX = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create X",
  })
  @post("{id}")
  static createX = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

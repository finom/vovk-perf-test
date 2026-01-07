import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xj")
export default class XjController {
  @operation({
    summary: "Get Xj",
  })
  @get()
  static getXj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xj",
  })
  @post("{id}")
  static createXj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

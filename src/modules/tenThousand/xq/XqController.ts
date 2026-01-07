import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xq")
export default class XqController {
  @operation({
    summary: "Get Xq",
  })
  @get()
  static getXq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xq",
  })
  @post("{id}")
  static createXq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

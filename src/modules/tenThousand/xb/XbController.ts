import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xb")
export default class XbController {
  @operation({
    summary: "Get Xb",
  })
  @get()
  static getXb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xb",
  })
  @post("{id}")
  static createXb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

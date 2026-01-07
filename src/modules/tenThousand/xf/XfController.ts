import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xf")
export default class XfController {
  @operation({
    summary: "Get Xf",
  })
  @get()
  static getXf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xf",
  })
  @post("{id}")
  static createXf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

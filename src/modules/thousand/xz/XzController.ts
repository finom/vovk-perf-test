import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xz")
export default class XzController {
  @operation({
    summary: "Get Xz",
  })
  @get()
  static getXz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xz",
  })
  @post("{id}")
  static createXz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

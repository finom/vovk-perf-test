import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zx")
export default class ZxController {
  @operation({
    summary: "Get Zx",
  })
  @get()
  static getZx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zx",
  })
  @post("{id}")
  static createZx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

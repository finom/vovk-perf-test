import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zz")
export default class ZzController {
  @operation({
    summary: "Get Zz",
  })
  @get()
  static getZz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zz",
  })
  @post("{id}")
  static createZz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

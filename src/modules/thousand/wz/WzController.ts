import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wz")
export default class WzController {
  @operation({
    summary: "Get Wz",
  })
  @get()
  static getWz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wz",
  })
  @post("{id}")
  static createWz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

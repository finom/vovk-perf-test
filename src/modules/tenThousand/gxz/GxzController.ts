import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxz")
export default class GxzController {
  @operation({
    summary: "Get Gxz",
  })
  @get()
  static getGxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxz",
  })
  @post("{id}")
  static createGxz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

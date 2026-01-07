import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxm")
export default class GxmController {
  @operation({
    summary: "Get Gxm",
  })
  @get()
  static getGxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxm",
  })
  @post("{id}")
  static createGxm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxd")
export default class GxdController {
  @operation({
    summary: "Get Gxd",
  })
  @get()
  static getGxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxd",
  })
  @post("{id}")
  static createGxd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

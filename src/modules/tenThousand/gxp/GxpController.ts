import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxp")
export default class GxpController {
  @operation({
    summary: "Get Gxp",
  })
  @get()
  static getGxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxp",
  })
  @post("{id}")
  static createGxp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxq")
export default class GxqController {
  @operation({
    summary: "Get Gxq",
  })
  @get()
  static getGxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxq",
  })
  @post("{id}")
  static createGxq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

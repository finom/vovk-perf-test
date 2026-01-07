import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxg")
export default class GxgController {
  @operation({
    summary: "Get Gxg",
  })
  @get()
  static getGxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxg",
  })
  @post("{id}")
  static createGxg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

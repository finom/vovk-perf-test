import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxw")
export default class GxwController {
  @operation({
    summary: "Get Gxw",
  })
  @get()
  static getGxw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxw",
  })
  @post("{id}")
  static createGxw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

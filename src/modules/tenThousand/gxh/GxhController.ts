import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxh")
export default class GxhController {
  @operation({
    summary: "Get Gxh",
  })
  @get()
  static getGxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxh",
  })
  @post("{id}")
  static createGxh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

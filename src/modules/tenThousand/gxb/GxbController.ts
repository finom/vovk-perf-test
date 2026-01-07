import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxb")
export default class GxbController {
  @operation({
    summary: "Get Gxb",
  })
  @get()
  static getGxb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxb",
  })
  @post("{id}")
  static createGxb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

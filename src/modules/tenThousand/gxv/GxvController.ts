import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxv")
export default class GxvController {
  @operation({
    summary: "Get Gxv",
  })
  @get()
  static getGxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxv",
  })
  @post("{id}")
  static createGxv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

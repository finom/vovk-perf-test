import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggv")
export default class GgvController {
  @operation({
    summary: "Get Ggv",
  })
  @get()
  static getGgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggv",
  })
  @post("{id}")
  static createGgv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggb")
export default class GgbController {
  @operation({
    summary: "Get Ggb",
  })
  @get()
  static getGgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggb",
  })
  @post("{id}")
  static createGgb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

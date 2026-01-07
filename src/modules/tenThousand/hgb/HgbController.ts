import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgb")
export default class HgbController {
  @operation({
    summary: "Get Hgb",
  })
  @get()
  static getHgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgb",
  })
  @post("{id}")
  static createHgb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

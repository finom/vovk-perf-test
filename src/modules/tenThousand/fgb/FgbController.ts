import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgb")
export default class FgbController {
  @operation({
    summary: "Get Fgb",
  })
  @get()
  static getFgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgb",
  })
  @post("{id}")
  static createFgb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

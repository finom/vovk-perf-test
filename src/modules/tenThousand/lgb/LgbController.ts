import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgb")
export default class LgbController {
  @operation({
    summary: "Get Lgb",
  })
  @get()
  static getLgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgb",
  })
  @post("{id}")
  static createLgb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

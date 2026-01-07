import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgb")
export default class KgbController {
  @operation({
    summary: "Get Kgb",
  })
  @get()
  static getKgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgb",
  })
  @post("{id}")
  static createKgb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egb")
export default class EgbController {
  @operation({
    summary: "Get Egb",
  })
  @get()
  static getEgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egb",
  })
  @post("{id}")
  static createEgb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

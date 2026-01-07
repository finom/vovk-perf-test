import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eff")
export default class EffController {
  @operation({
    summary: "Get Eff",
  })
  @get()
  static getEff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eff",
  })
  @post("{id}")
  static createEff = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

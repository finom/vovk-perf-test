import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpv")
export default class HpvController {
  @operation({
    summary: "Get Hpv",
  })
  @get()
  static getHpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpv",
  })
  @post("{id}")
  static createHpv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

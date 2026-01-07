import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpk")
export default class HpkController {
  @operation({
    summary: "Get Hpk",
  })
  @get()
  static getHpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpk",
  })
  @post("{id}")
  static createHpk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

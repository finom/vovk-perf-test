import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpw")
export default class HpwController {
  @operation({
    summary: "Get Hpw",
  })
  @get()
  static getHpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpw",
  })
  @post("{id}")
  static createHpw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

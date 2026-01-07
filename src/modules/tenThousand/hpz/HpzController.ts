import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpz")
export default class HpzController {
  @operation({
    summary: "Get Hpz",
  })
  @get()
  static getHpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpz",
  })
  @post("{id}")
  static createHpz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

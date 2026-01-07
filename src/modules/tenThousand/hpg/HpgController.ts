import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpg")
export default class HpgController {
  @operation({
    summary: "Get Hpg",
  })
  @get()
  static getHpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpg",
  })
  @post("{id}")
  static createHpg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

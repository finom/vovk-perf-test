import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hp")
export default class HpController {
  @operation({
    summary: "Get Hp",
  })
  @get()
  static getHp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hp",
  })
  @post("{id}")
  static createHp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

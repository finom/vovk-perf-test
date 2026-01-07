import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzs")
export default class HzsController {
  @operation({
    summary: "Get Hzs",
  })
  @get()
  static getHzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzs",
  })
  @post("{id}")
  static createHzs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

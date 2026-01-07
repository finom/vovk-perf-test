import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzs")
export default class KzsController {
  @operation({
    summary: "Get Kzs",
  })
  @get()
  static getKzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzs",
  })
  @post("{id}")
  static createKzs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

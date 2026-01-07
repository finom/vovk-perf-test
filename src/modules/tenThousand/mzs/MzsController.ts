import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzs")
export default class MzsController {
  @operation({
    summary: "Get Mzs",
  })
  @get()
  static getMzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzs",
  })
  @post("{id}")
  static createMzs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

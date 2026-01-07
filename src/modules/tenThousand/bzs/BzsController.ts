import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzs")
export default class BzsController {
  @operation({
    summary: "Get Bzs",
  })
  @get()
  static getBzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzs",
  })
  @post("{id}")
  static createBzs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

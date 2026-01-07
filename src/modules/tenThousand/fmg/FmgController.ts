import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmg")
export default class FmgController {
  @operation({
    summary: "Get Fmg",
  })
  @get()
  static getFmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmg",
  })
  @post("{id}")
  static createFmg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

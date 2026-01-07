import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvl")
export default class FvlController {
  @operation({
    summary: "Get Fvl",
  })
  @get()
  static getFvl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvl",
  })
  @post("{id}")
  static createFvl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

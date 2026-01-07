import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmv")
export default class FmvController {
  @operation({
    summary: "Get Fmv",
  })
  @get()
  static getFmv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmv",
  })
  @post("{id}")
  static createFmv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

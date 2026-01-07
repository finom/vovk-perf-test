import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmb")
export default class FmbController {
  @operation({
    summary: "Get Fmb",
  })
  @get()
  static getFmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmb",
  })
  @post("{id}")
  static createFmb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

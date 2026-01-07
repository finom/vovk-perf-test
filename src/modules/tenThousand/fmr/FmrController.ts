import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmr")
export default class FmrController {
  @operation({
    summary: "Get Fmr",
  })
  @get()
  static getFmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmr",
  })
  @post("{id}")
  static createFmr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmh")
export default class FmhController {
  @operation({
    summary: "Get Fmh",
  })
  @get()
  static getFmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmh",
  })
  @post("{id}")
  static createFmh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

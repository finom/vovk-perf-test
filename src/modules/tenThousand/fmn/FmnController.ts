import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmn")
export default class FmnController {
  @operation({
    summary: "Get Fmn",
  })
  @get()
  static getFmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmn",
  })
  @post("{id}")
  static createFmn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmj")
export default class FmjController {
  @operation({
    summary: "Get Fmj",
  })
  @get()
  static getFmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmj",
  })
  @post("{id}")
  static createFmj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

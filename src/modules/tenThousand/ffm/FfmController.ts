import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffm")
export default class FfmController {
  @operation({
    summary: "Get Ffm",
  })
  @get()
  static getFfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffm",
  })
  @post("{id}")
  static createFfm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

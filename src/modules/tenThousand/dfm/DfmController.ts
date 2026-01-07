import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfm")
export default class DfmController {
  @operation({
    summary: "Get Dfm",
  })
  @get()
  static getDfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfm",
  })
  @post("{id}")
  static createDfm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfp")
export default class DfpController {
  @operation({
    summary: "Get Dfp",
  })
  @get()
  static getDfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfp",
  })
  @post("{id}")
  static createDfp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

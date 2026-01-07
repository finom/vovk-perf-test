import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtw")
export default class DtwController {
  @operation({
    summary: "Get Dtw",
  })
  @get()
  static getDtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtw",
  })
  @post("{id}")
  static createDtw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

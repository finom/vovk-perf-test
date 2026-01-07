import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcg")
export default class DcgController {
  @operation({
    summary: "Get Dcg",
  })
  @get()
  static getDcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcg",
  })
  @post("{id}")
  static createDcg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

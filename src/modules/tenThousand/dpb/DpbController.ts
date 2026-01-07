import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpb")
export default class DpbController {
  @operation({
    summary: "Get Dpb",
  })
  @get()
  static getDpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpb",
  })
  @post("{id}")
  static createDpb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

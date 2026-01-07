import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpb")
export default class LpbController {
  @operation({
    summary: "Get Lpb",
  })
  @get()
  static getLpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpb",
  })
  @post("{id}")
  static createLpb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlb")
export default class MlbController {
  @operation({
    summary: "Get Mlb",
  })
  @get()
  static getMlb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlb",
  })
  @post("{id}")
  static createMlb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

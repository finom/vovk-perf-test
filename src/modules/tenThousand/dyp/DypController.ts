import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyp")
export default class DypController {
  @operation({
    summary: "Get Dyp",
  })
  @get()
  static getDyp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyp",
  })
  @post("{id}")
  static createDyp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

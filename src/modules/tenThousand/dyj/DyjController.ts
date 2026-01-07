import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyj")
export default class DyjController {
  @operation({
    summary: "Get Dyj",
  })
  @get()
  static getDyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyj",
  })
  @post("{id}")
  static createDyj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

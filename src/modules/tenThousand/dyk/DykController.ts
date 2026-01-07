import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyk")
export default class DykController {
  @operation({
    summary: "Get Dyk",
  })
  @get()
  static getDyk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyk",
  })
  @post("{id}")
  static createDyk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

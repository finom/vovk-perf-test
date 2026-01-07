import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dun")
export default class DunController {
  @operation({
    summary: "Get Dun",
  })
  @get()
  static getDun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dun",
  })
  @post("{id}")
  static createDun = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

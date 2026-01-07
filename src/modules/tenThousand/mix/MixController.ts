import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mix")
export default class MixController {
  @operation({
    summary: "Get Mix",
  })
  @get()
  static getMix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mix",
  })
  @post("{id}")
  static createMix = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

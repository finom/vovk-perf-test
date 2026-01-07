import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dur")
export default class DurController {
  @operation({
    summary: "Get Dur",
  })
  @get()
  static getDur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dur",
  })
  @post("{id}")
  static createDur = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

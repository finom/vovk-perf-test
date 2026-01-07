import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbb")
export default class DbbController {
  @operation({
    summary: "Get Dbb",
  })
  @get()
  static getDbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbb",
  })
  @post("{id}")
  static createDbb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

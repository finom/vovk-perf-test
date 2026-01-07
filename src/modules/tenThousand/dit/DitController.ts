import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dit")
export default class DitController {
  @operation({
    summary: "Get Dit",
  })
  @get()
  static getDit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dit",
  })
  @post("{id}")
  static createDit = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

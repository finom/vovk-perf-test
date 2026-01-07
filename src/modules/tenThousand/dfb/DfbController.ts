import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfb")
export default class DfbController {
  @operation({
    summary: "Get Dfb",
  })
  @get()
  static getDfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfb",
  })
  @post("{id}")
  static createDfb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

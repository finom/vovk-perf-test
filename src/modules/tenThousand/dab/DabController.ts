import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dab")
export default class DabController {
  @operation({
    summary: "Get Dab",
  })
  @get()
  static getDab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dab",
  })
  @post("{id}")
  static createDab = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

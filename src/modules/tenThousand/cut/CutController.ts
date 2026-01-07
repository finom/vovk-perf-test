import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cut")
export default class CutController {
  @operation({
    summary: "Get Cut",
  })
  @get()
  static getCut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cut",
  })
  @post("{id}")
  static createCut = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

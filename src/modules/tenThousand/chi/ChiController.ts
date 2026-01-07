import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chi")
export default class ChiController {
  @operation({
    summary: "Get Chi",
  })
  @get()
  static getChi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chi",
  })
  @post("{id}")
  static createChi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

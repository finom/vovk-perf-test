import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyb")
export default class HybController {
  @operation({
    summary: "Get Hyb",
  })
  @get()
  static getHyb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyb",
  })
  @post("{id}")
  static createHyb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

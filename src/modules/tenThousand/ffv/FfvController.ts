import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffv")
export default class FfvController {
  @operation({
    summary: "Get Ffv",
  })
  @get()
  static getFfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffv",
  })
  @post("{id}")
  static createFfv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

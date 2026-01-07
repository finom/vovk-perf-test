import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffb")
export default class FfbController {
  @operation({
    summary: "Get Ffb",
  })
  @get()
  static getFfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffb",
  })
  @post("{id}")
  static createFfb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

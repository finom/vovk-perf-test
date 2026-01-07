import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhr")
export default class MhrController {
  @operation({
    summary: "Get Mhr",
  })
  @get()
  static getMhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhr",
  })
  @post("{id}")
  static createMhr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

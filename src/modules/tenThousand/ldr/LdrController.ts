import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldr")
export default class LdrController {
  @operation({
    summary: "Get Ldr",
  })
  @get()
  static getLdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldr",
  })
  @post("{id}")
  static createLdr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

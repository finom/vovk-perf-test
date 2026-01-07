import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bss")
export default class BssController {
  @operation({
    summary: "Get Bss",
  })
  @get()
  static getBss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bss",
  })
  @post("{id}")
  static createBss = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

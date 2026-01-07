import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sz")
export default class SzController {
  @operation({
    summary: "Get Sz",
  })
  @get()
  static getSz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sz",
  })
  @post("{id}")
  static createSz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

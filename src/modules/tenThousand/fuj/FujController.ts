import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuj")
export default class FujController {
  @operation({
    summary: "Get Fuj",
  })
  @get()
  static getFuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuj",
  })
  @post("{id}")
  static createFuj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

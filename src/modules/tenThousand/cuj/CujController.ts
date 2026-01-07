import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuj")
export default class CujController {
  @operation({
    summary: "Get Cuj",
  })
  @get()
  static getCuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cuj",
  })
  @post("{id}")
  static createCuj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

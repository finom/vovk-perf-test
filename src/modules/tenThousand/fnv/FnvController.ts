import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnv")
export default class FnvController {
  @operation({
    summary: "Get Fnv",
  })
  @get()
  static getFnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnv",
  })
  @post("{id}")
  static createFnv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

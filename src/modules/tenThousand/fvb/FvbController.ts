import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvb")
export default class FvbController {
  @operation({
    summary: "Get Fvb",
  })
  @get()
  static getFvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvb",
  })
  @post("{id}")
  static createFvb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

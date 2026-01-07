import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvz")
export default class FvzController {
  @operation({
    summary: "Get Fvz",
  })
  @get()
  static getFvz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvz",
  })
  @post("{id}")
  static createFvz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

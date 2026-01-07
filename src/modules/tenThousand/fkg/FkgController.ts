import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkg")
export default class FkgController {
  @operation({
    summary: "Get Fkg",
  })
  @get()
  static getFkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkg",
  })
  @post("{id}")
  static createFkg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

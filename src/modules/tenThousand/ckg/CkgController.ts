import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckg")
export default class CkgController {
  @operation({
    summary: "Get Ckg",
  })
  @get()
  static getCkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckg",
  })
  @post("{id}")
  static createCkg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

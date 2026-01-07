import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkg")
export default class LkgController {
  @operation({
    summary: "Get Lkg",
  })
  @get()
  static getLkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkg",
  })
  @post("{id}")
  static createLkg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

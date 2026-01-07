import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkg")
export default class BkgController {
  @operation({
    summary: "Get Bkg",
  })
  @get()
  static getBkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkg",
  })
  @post("{id}")
  static createBkg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

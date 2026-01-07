import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akg")
export default class AkgController {
  @operation({
    summary: "Get Akg",
  })
  @get()
  static getAkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akg",
  })
  @post("{id}")
  static createAkg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

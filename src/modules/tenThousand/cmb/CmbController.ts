import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmb")
export default class CmbController {
  @operation({
    summary: "Get Cmb",
  })
  @get()
  static getCmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmb",
  })
  @post("{id}")
  static createCmb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

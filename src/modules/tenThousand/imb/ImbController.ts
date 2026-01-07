import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imb")
export default class ImbController {
  @operation({
    summary: "Get Imb",
  })
  @get()
  static getImb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imb",
  })
  @post("{id}")
  static createImb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmb")
export default class KmbController {
  @operation({
    summary: "Get Kmb",
  })
  @get()
  static getKmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmb",
  })
  @post("{id}")
  static createKmb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

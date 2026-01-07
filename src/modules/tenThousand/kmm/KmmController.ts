import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmm")
export default class KmmController {
  @operation({
    summary: "Get Kmm",
  })
  @get()
  static getKmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmm",
  })
  @post("{id}")
  static createKmm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

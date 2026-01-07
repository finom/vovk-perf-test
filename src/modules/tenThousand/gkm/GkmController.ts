import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkm")
export default class GkmController {
  @operation({
    summary: "Get Gkm",
  })
  @get()
  static getGkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkm",
  })
  @post("{id}")
  static createGkm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

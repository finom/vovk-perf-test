import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgs")
export default class CgsController {
  @operation({
    summary: "Get Cgs",
  })
  @get()
  static getCgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgs",
  })
  @post("{id}")
  static createCgs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

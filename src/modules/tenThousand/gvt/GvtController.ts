import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvt")
export default class GvtController {
  @operation({
    summary: "Get Gvt",
  })
  @get()
  static getGvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvt",
  })
  @post("{id}")
  static createGvt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

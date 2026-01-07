import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cw")
export default class CwController {
  @operation({
    summary: "Get Cw",
  })
  @get()
  static getCw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cw",
  })
  @post("{id}")
  static createCw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

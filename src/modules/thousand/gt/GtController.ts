import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gt")
export default class GtController {
  @operation({
    summary: "Get Gt",
  })
  @get()
  static getGt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gt",
  })
  @post("{id}")
  static createGt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

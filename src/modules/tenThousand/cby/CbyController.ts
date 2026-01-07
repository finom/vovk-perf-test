import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cby")
export default class CbyController {
  @operation({
    summary: "Get Cby",
  })
  @get()
  static getCby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cby",
  })
  @post("{id}")
  static createCby = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

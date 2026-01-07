import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwo")
export default class CwoController {
  @operation({
    summary: "Get Cwo",
  })
  @get()
  static getCwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwo",
  })
  @post("{id}")
  static createCwo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

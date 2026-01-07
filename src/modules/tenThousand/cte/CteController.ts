import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cte")
export default class CteController {
  @operation({
    summary: "Get Cte",
  })
  @get()
  static getCte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cte",
  })
  @post("{id}")
  static createCte = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

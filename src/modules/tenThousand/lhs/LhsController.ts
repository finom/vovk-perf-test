import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhs")
export default class LhsController {
  @operation({
    summary: "Get Lhs",
  })
  @get()
  static getLhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhs",
  })
  @post("{id}")
  static createLhs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

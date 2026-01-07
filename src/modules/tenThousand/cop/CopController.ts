import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cop")
export default class CopController {
  @operation({
    summary: "Get Cop",
  })
  @get()
  static getCop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cop",
  })
  @post("{id}")
  static createCop = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

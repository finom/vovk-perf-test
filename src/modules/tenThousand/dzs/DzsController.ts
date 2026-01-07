import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzs")
export default class DzsController {
  @operation({
    summary: "Get Dzs",
  })
  @get()
  static getDzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzs",
  })
  @post("{id}")
  static createDzs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

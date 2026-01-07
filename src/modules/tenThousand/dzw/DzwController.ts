import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzw")
export default class DzwController {
  @operation({
    summary: "Get Dzw",
  })
  @get()
  static getDzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzw",
  })
  @post("{id}")
  static createDzw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

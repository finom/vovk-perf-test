import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzf")
export default class DzfController {
  @operation({
    summary: "Get Dzf",
  })
  @get()
  static getDzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzf",
  })
  @post("{id}")
  static createDzf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

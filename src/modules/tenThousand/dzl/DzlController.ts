import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzl")
export default class DzlController {
  @operation({
    summary: "Get Dzl",
  })
  @get()
  static getDzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzl",
  })
  @post("{id}")
  static createDzl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

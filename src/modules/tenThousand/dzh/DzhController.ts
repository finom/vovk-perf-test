import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzh")
export default class DzhController {
  @operation({
    summary: "Get Dzh",
  })
  @get()
  static getDzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzh",
  })
  @post("{id}")
  static createDzh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

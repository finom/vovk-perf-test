import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzm")
export default class DzmController {
  @operation({
    summary: "Get Dzm",
  })
  @get()
  static getDzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzm",
  })
  @post("{id}")
  static createDzm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

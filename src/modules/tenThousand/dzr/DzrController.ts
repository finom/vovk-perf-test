import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzr")
export default class DzrController {
  @operation({
    summary: "Get Dzr",
  })
  @get()
  static getDzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzr",
  })
  @post("{id}")
  static createDzr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

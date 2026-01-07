import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzb")
export default class DzbController {
  @operation({
    summary: "Get Dzb",
  })
  @get()
  static getDzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzb",
  })
  @post("{id}")
  static createDzb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

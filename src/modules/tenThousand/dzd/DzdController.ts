import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzd")
export default class DzdController {
  @operation({
    summary: "Get Dzd",
  })
  @get()
  static getDzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzd",
  })
  @post("{id}")
  static createDzd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

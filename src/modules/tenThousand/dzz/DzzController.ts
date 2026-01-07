import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzz")
export default class DzzController {
  @operation({
    summary: "Get Dzz",
  })
  @get()
  static getDzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzz",
  })
  @post("{id}")
  static createDzz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

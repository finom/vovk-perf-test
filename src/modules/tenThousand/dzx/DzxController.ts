import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzx")
export default class DzxController {
  @operation({
    summary: "Get Dzx",
  })
  @get()
  static getDzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzx",
  })
  @post("{id}")
  static createDzx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

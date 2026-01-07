import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzk")
export default class DzkController {
  @operation({
    summary: "Get Dzk",
  })
  @get()
  static getDzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzk",
  })
  @post("{id}")
  static createDzk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvy")
export default class BvyController {
  @operation({
    summary: "Get Bvy",
  })
  @get()
  static getBvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvy",
  })
  @post("{id}")
  static createBvy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

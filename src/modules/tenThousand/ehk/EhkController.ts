import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehk")
export default class EhkController {
  @operation({
    summary: "Get Ehk",
  })
  @get()
  static getEhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehk",
  })
  @post("{id}")
  static createEhk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

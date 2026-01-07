import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wk")
export default class WkController {
  @operation({
    summary: "Get Wk",
  })
  @get()
  static getWk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wk",
  })
  @post("{id}")
  static createWk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

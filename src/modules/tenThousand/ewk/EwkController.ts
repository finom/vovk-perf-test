import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewk")
export default class EwkController {
  @operation({
    summary: "Get Ewk",
  })
  @get()
  static getEwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewk",
  })
  @post("{id}")
  static createEwk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

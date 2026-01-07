import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwk")
export default class GwkController {
  @operation({
    summary: "Get Gwk",
  })
  @get()
  static getGwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwk",
  })
  @post("{id}")
  static createGwk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

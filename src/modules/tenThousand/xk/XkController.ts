import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xk")
export default class XkController {
  @operation({
    summary: "Get Xk",
  })
  @get()
  static getXk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xk",
  })
  @post("{id}")
  static createXk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

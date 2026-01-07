import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qk")
export default class QkController {
  @operation({
    summary: "Get Qk",
  })
  @get()
  static getQk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qk",
  })
  @post("{id}")
  static createQk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

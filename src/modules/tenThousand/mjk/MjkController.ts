import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjk")
export default class MjkController {
  @operation({
    summary: "Get Mjk",
  })
  @get()
  static getMjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjk",
  })
  @post("{id}")
  static createMjk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

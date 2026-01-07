import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljk")
export default class LjkController {
  @operation({
    summary: "Get Ljk",
  })
  @get()
  static getLjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljk",
  })
  @post("{id}")
  static createLjk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

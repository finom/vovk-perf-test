import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqk")
export default class BqkController {
  @operation({
    summary: "Get Bqk",
  })
  @get()
  static getBqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqk",
  })
  @post("{id}")
  static createBqk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfk")
export default class BfkController {
  @operation({
    summary: "Get Bfk",
  })
  @get()
  static getBfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfk",
  })
  @post("{id}")
  static createBfk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

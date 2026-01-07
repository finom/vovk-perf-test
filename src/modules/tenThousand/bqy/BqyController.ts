import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqy")
export default class BqyController {
  @operation({
    summary: "Get Bqy",
  })
  @get()
  static getBqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqy",
  })
  @post("{id}")
  static createBqy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

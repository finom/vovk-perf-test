import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqz")
export default class BqzController {
  @operation({
    summary: "Get Bqz",
  })
  @get()
  static getBqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqz",
  })
  @post("{id}")
  static createBqz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

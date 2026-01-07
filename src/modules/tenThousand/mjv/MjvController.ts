import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjv")
export default class MjvController {
  @operation({
    summary: "Get Mjv",
  })
  @get()
  static getMjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjv",
  })
  @post("{id}")
  static createMjv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

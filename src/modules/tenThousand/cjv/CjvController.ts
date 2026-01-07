import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjv")
export default class CjvController {
  @operation({
    summary: "Get Cjv",
  })
  @get()
  static getCjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjv",
  })
  @post("{id}")
  static createCjv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjg")
export default class CjgController {
  @operation({
    summary: "Get Cjg",
  })
  @get()
  static getCjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjg",
  })
  @post("{id}")
  static createCjg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjz")
export default class CjzController {
  @operation({
    summary: "Get Cjz",
  })
  @get()
  static getCjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjz",
  })
  @post("{id}")
  static createCjz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

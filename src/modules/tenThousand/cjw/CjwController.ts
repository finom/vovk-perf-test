import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjw")
export default class CjwController {
  @operation({
    summary: "Get Cjw",
  })
  @get()
  static getCjw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjw",
  })
  @post("{id}")
  static createCjw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

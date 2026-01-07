import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjm")
export default class CjmController {
  @operation({
    summary: "Get Cjm",
  })
  @get()
  static getCjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjm",
  })
  @post("{id}")
  static createCjm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

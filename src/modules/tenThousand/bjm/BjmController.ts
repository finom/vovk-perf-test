import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjm")
export default class BjmController {
  @operation({
    summary: "Get Bjm",
  })
  @get()
  static getBjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjm",
  })
  @post("{id}")
  static createBjm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

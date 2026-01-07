import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjl")
export default class BjlController {
  @operation({
    summary: "Get Bjl",
  })
  @get()
  static getBjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjl",
  })
  @post("{id}")
  static createBjl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

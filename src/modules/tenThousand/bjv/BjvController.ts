import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjv")
export default class BjvController {
  @operation({
    summary: "Get Bjv",
  })
  @get()
  static getBjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjv",
  })
  @post("{id}")
  static createBjv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjc")
export default class BjcController {
  @operation({
    summary: "Get Bjc",
  })
  @get()
  static getBjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjc",
  })
  @post("{id}")
  static createBjc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

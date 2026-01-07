import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjz")
export default class BjzController {
  @operation({
    summary: "Get Bjz",
  })
  @get()
  static getBjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjz",
  })
  @post("{id}")
  static createBjz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

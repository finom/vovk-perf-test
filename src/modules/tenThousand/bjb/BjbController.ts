import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjb")
export default class BjbController {
  @operation({
    summary: "Get Bjb",
  })
  @get()
  static getBjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjb",
  })
  @post("{id}")
  static createBjb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

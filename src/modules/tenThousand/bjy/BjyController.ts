import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjy")
export default class BjyController {
  @operation({
    summary: "Get Bjy",
  })
  @get()
  static getBjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjy",
  })
  @post("{id}")
  static createBjy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

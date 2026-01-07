import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjp")
export default class BjpController {
  @operation({
    summary: "Get Bjp",
  })
  @get()
  static getBjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjp",
  })
  @post("{id}")
  static createBjp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

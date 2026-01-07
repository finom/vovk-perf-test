import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjf")
export default class BjfController {
  @operation({
    summary: "Get Bjf",
  })
  @get()
  static getBjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjf",
  })
  @post("{id}")
  static createBjf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

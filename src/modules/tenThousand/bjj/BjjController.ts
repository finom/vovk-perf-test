import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjj")
export default class BjjController {
  @operation({
    summary: "Get Bjj",
  })
  @get()
  static getBjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjj",
  })
  @post("{id}")
  static createBjj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
